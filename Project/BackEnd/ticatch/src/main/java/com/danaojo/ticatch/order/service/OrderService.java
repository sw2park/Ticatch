package com.danaojo.ticatch.order.service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.order.Entity.OrderDTO;
import com.danaojo.ticatch.order.Entity.OrderEntity;
import com.danaojo.ticatch.order.Entity.PFJoinDTO;
import com.danaojo.ticatch.order.Entity.SeatEntity;
import com.danaojo.ticatch.order.Entity.SeatId;
import com.danaojo.ticatch.order.Entity.UserDTO;
import com.danaojo.ticatch.order.Entity.UserEntity;
import com.danaojo.ticatch.order.repository.OrderRepository;
import com.danaojo.ticatch.order.repository.SeatRepository;
import com.danaojo.ticatch.order.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderService {

	private final OrderRepository orderRepository;
	private final SeatRepository seatRepository;
	private final UserRepository userRepository;

	// 결제가 성공적으로 되면 작동되는 로직 (테이블에 데이터 저장)
	public String createOrder(OrderDTO orderListDTO) {
		// OrderEntity 생성 및 데이터 매핑
		OrderEntity order = new OrderEntity();
		order.setSeqPfjoinId(orderListDTO.getSeqPfjoinIds().get(0).toString()); // seqpfjoinids set
		order.setViewDate(orderListDTO.getSelectedDate()); // 공연 날짜 set
		order.setViewTime(orderListDTO.getSelectedTime()); // 회차 set
		order.setTotalSum(orderListDTO.getTotalPrice()); // 총합 set
		order.setUserId(orderListDTO.getUserId()); // userid set

		// 좌석 정보 처리
		StringBuilder seatNumbers = new StringBuilder();
		for (OrderDTO.SeatInfo seatInfo : orderListDTO.getSelectedSeatsInfo()) {
			seatNumbers.append(seatInfo.getSeat()).append(", "); // 리액트에서 전달 받은 좌석 데이터를 , 로 붙임 (인덱스로 넘어옴)
		}

		// 마지막에 ", " 저장되서 지우는거
		if (seatNumbers.length() > 0) {
			seatNumbers.deleteCharAt(seatNumbers.length() - 1); // 마지막 공백 제거
			seatNumbers.deleteCharAt(seatNumbers.length() - 1); // 마지막 쉼표 제거
		}

		String seatNums = seatNumbers.substring(0, seatNumbers.length());

		order.setSeatNum(seatNums); // 좌석 위치 저장 예) A1, B1

		int seatCount = seatNums.split(", ").length;
		order.setTotalTicket(String.valueOf(seatCount)); // 구매한 티켓 개수의 총합 set

		// 구매 날짜 설정
		LocalDate date = LocalDate.now();
		order.setBuyDate(String.valueOf(date)); // 날짜 set 예) 2024-12-05

		// 장소 정보 처리
		// 이 로직은 조금더 알아보기
		Long idAsLong = Long.valueOf(orderListDTO.getSeqPfjoinIds().get(0).toString());
		List<String> matchingFdaddrList = orderRepository.findAll().stream()
				.filter(dto -> dto.getSeqPfjoinId().equals(idAsLong)).map(PFJoinDTO::getFdAddr)
				.collect(Collectors.toList());
		order.setPlace(String.join(", ", matchingFdaddrList)); // 받은 id 값이랑 일치하는 걸 pfjoin 테이블에서 가지고와서 그 장소만 order 테이블에
																// set

		// OrderEntity 저장
		OrderEntity savedOrder = orderRepository.save(order); // 위 set 된 모든 값 테이블에 저장
		System.out.println("savedOrder: " + savedOrder); // 저장된 값 보기

		// SeatEntity 처리
		// 회차 정보 글자 제거 후 숫자만 저장 (이건 시간만 예) 수요일 18:00 -> 18:00 만 set) - 이렇게 하는 이유는 상세페이지
		// 개발하는 분이 이렇게 저장해달라고함
		String viewTime = orderListDTO.getSelectedTime().replaceAll("[^0-9:]", "");

		SeatId seatId = new SeatId(idAsLong, orderListDTO.getSelectedDate(), viewTime); // 복합키로 묶은거 3개 값 가지고 오기
		SeatEntity seat = seatRepository.findById(seatId).orElse(null); // 그 복합키를 이용하여 Seat 테이블 조회

		// 해당 복합키가 없으면 행 추가 후 데이터 저장
		if (seat == null) {
			seat = new SeatEntity(); // 초기화
			seat.setSeqPfjoinId(idAsLong); // seqpfjoinid set
			seat.setSelectDate(orderListDTO.getSelectedDate()); // 공연날짜 set
			seat.setSelectTime(viewTime); // 회차 set
			seat.setTotal(160 - seatCount); // 160 인 고정된 전체 좌석 개수에서 판매된 티켓 만큼 빼고 저장 (상세페이지에서 구매가능한 티켓 개수 보고 싶어서 그럼)
											// (등급별로는 안됬지만 이거라도...)
			seat.setSoldSeat(seatNums); // 판매된 좌석 예) A1, B1 을 set (만약 여기에 값이 있다면 구매 못하게 막았음)
			SeatEntity seatnullsaved = seatRepository.save(seat); // 저장
			System.out.println("seatnullsaved: " + seatnullsaved);
		} else { // 있으면 그냥 그 행에 판매된 좌석만 추가
			seat.setTotal(seat.getTotal() - seatCount); // 해당 행이 있다면 저장되있는 좌석 총 개수에서 구매한 티켓 개수 만큼 빼서 set
			String seats = seat.getSoldSeat();
			seat.setSoldSeat(seats + ", " + seatNums); // 판매된 좌석 정보를 , 로 붙여서 set
			SeatEntity seatsaved = seatRepository.save(seat); // 저장
			System.out.println("seatsaved: " + seatsaved);
		}

		return "예약이 성공적으로 처리되었습니다.";
	}

	// 날짜 및 회차 변경시 실행되는 로직
	public String getSoldSeats(OrderDTO seatDTO) {
		Long idAsLong = Long.valueOf(seatDTO.getSeqPfjoinIds().get(0).toString()); // id 를 long 값으로 변환

		String viewTime = seatDTO.getSelectedTime().replaceAll("[^0-9:]", ""); // 회차 숫자만 예) 수요일 18:00 -> 18:00 으로

		SeatId seatId = new SeatId(idAsLong, seatDTO.getSelectedDate(), viewTime);
		SeatEntity seat = seatRepository.findById(seatId).orElse(null);

		if (seat == null) {
			// 데이터가 없을 때
			System.out.println("No data available");
			return "No data available";
		} else {
			// 판매된 좌석 반환
			String soldSeats = seat.getSoldSeat();
			System.out.println("Sold Seats: " + soldSeats);
			return soldSeats;
		}
	}

	// 시간 남으면
	// 좌석 팔린 기준으로 많은것들이 랭킹 1위임 (해당 seqpfjoin 에 가장 좌석이 많이 팔린게 랭킹 1위)
	public String findRank() {

		return null;
	}

	// 로그인 처리 로직
	public UserDTO login(UserDTO userDTO) {
		// Fetch the user from the database (returns a User entity)
		UserEntity user = userRepository.findByUserId(userDTO.getUserId());

		// Check if user exists
		if (user == null) {
			throw new RuntimeException("아이디 없음 / 틀렸음");
		}

		// Check if password matches
		if (!user.getPassword().equals(userDTO.getPassword())) {
			throw new RuntimeException("비밀번호가 없음 / 틀렸음");
		}

		// Map User entity to UserDTO
		return new UserDTO();
	}

	// 회원 가입 로직
	public ResponseEntity<String> saveUser(UserDTO userDTO) {
	    try {
	        // 아이디 중복 확인
	        if (userRepository.findByUserId(userDTO.getUserId()) != null) {
	        	System.out.println("아이디 중복");
	            return ResponseEntity.ok("아이디 중복");
	        }

	        System.out.println("회원가입 (회원 저장중)");

	        // DTO -> Entity 변환
	        UserEntity userEntity = new UserEntity();
	        userEntity.setUserId(userDTO.getUserId());
	        userEntity.setPassword(userDTO.getPassword());
	        userEntity.setName(userDTO.getName());
	        userEntity.setEmail(userDTO.getEmail());
	        userEntity.setPhone(userDTO.getPhone());
	        userEntity.setLoginType("일반"); // 기본값 설정
	        userEntity.setCreateDate(new Date());

	        // 사용자 정보 저장
	        userRepository.save(userEntity);

	        System.out.println("회원가입 성공");
	        return ResponseEntity.ok("회원가입 성공");

	    } catch (Exception e) {
	        System.err.println("회원가입 오류 - " + e.getMessage());
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("회원가입 오류");
	    }
	}


}
