package com.danaojo.ticatch.order.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.order.Entity.OrderDTO;
import com.danaojo.ticatch.order.Entity.OrderEntity;
import com.danaojo.ticatch.order.Entity.PFJoinDTO;
import com.danaojo.ticatch.order.Entity.SeatEntity;
import com.danaojo.ticatch.order.Entity.SeatId;
import com.danaojo.ticatch.order.repository.OrderRepository;
import com.danaojo.ticatch.order.repository.SeatRepository;
import com.danaojo.ticatch.order.service.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {
	private final OrderRepository orderRepository;
	
	private final SeatRepository seatRepository;

	// 전체 조회
	@GetMapping
	public List<PFJoinDTO> Order() {

		List<PFJoinDTO> order = orderRepository.findAll();

		System.out.println(order.size());

		return order;
	}

	// seqPfjoinId 로 동일한 값만 조회
	@GetMapping("/{seqPfjoinId}")
	public List<PFJoinDTO> getOrderById(@PathVariable Long seqPfjoinId) {
		
		System.out.println(seqPfjoinId);
	    
	    List<PFJoinDTO> findBySeqPfJoinId = orderRepository.findBySeqPfjoinId(seqPfjoinId);
	    
	    return findBySeqPfJoinId;
	} 
	
	// SQL 만들어서 테이블 만들고 거기에 추가 하기 (나중에 다른 사람이 테이블 만들면 알아서 값 저장되게 테이블 이름이 같으면 되니깐)
	@PostMapping("/reservation")
	public ResponseEntity<String> createReservation(@RequestBody OrderDTO reservationDTO) {
	    // 데이터 매핑
	    OrderEntity order = new OrderEntity();
	    order.setSeqPfjoinId(reservationDTO.getSeqPfjoinIds().get(0).toString()); // 첫 번째 공연 ID
	    order.setViewDate(reservationDTO.getSelectedDate());
	    order.setTotalSum(reservationDTO.getTotalPrice());
	    order.setViewTime(reservationDTO.getSelectedTime());

	    // 좌석 정보 합치기
	    StringBuilder seatNumbers = new StringBuilder();
	    for (OrderDTO.SeatInfo seatInfo : reservationDTO.getSelectedSeatsInfo()) {
	        seatNumbers.append(seatInfo.getSeat()).append(", ");
	    }
	    String seatNum = seatNumbers.substring(0, seatNumbers.length() - 2); // 좌석의 마지막 ", " 제거
	    order.setSeatNum(seatNum); // 좌석 위치 정보 저장
	    String[] seatArray = seatNum.split(", "); // ", " 기준으로 좌석을 분리
	    int seatCount = seatArray.length; // 분리된 좌석의 개수
	    String seatCounts = String.valueOf(seatCount); // 숫자인 seatCount 를 문자열로 변환
	    order.setTotalTicket(seatCounts); // 구매한 총 티켓 개수 저장
	    
	    LocalDateTime date = LocalDateTime.now();
	    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
	    String formattedDateTime = date.format(formatter);
	    order.setBuyDate(formattedDateTime);	// 구매한 시간 저장
	    
	    String id = reservationDTO.getSeqPfjoinIds().get(0).toString();
	    Long idAsLong = Long.valueOf(id);	// 문자를 Long 타입으로 변환
	    
	    List<PFJoinDTO> orders = orderRepository.findAll();
	    List<String> matchingFdaddrList = new ArrayList<>();
	    for (PFJoinDTO dto : orders) {
	        if (dto.getSeqPfjoinId().equals(idAsLong)) {	// 변환한 id 로 비교
	            matchingFdaddrList.add(dto.getFdAddr());	// id 가 동일하면 그 값을 리스트에 저장
	        }
	    }
	    String result = String.join(", ", matchingFdaddrList);	// 리스트를 문자열로 변환
	    order.setPlace(result);	// 장소 저장
	    
	    // 데이터 저장
	    OrderEntity savedOrder = orderRepository.save(order);

	    // 디버깅 출력
	    System.out.println("저장된 데이터: " + savedOrder);
	    
	    // 리액트에서 날짜, 회차 선택시 onClick 이벤트 넣어서 여기 pk 값 3개로 계속 조회해서 
	    // 정확한 값 보내주기
	    SeatId seatId = new SeatId(idAsLong, reservationDTO.getSelectedDate(), reservationDTO.getSelectedTime());
	    SeatEntity seat = seatRepository.findById(seatId).orElse(null);
	   
	    if (seat == null) {
	    	seat = new SeatEntity();
	        seat.setSeqPfjoinId(idAsLong);
	        seat.setSelectDate(reservationDTO.getSelectedDate());
	        
	        String time = reservationDTO.getSelectedTime();
	        String times = time.replaceAll("[^0-9:]", "");
	        
	        seat.setSelectTime(times);	// 숫자랑 : 만 저장 수(18:00) => 18:00
	        
	        int CalcSeats = 160 - seatCount;
	        seat.setTotal(CalcSeats);	// 계산된 새로운 좌석 총합
	        seat.setSoldSeat(seatNum); 
	        
	        seatRepository.save(seat);
	    } else {
	    	int currentTotalSeats = seat.getTotal(); // 좌석 총합 가지고 오고
	    	int updatedTotalSeats = currentTotalSeats - seatCount; // 티켓 개수 만큼 빼고
	    	seat.setTotal(updatedTotalSeats); // 판매된 좌석 데이터 변경
	    	
	    	String seats = seat.getSoldSeat(); // 테이블에서 기존 예약된 좌석 정보 가지고오기
	    	seats += (", ") + seatNum; // 새롭게 추가된 좌석정보랑 합침(문자열로)
	    	seat.setSoldSeat(seats); // 합친걸 통으로 다시 save
	    	
	    	SeatEntity savedSeat = seatRepository.save(seat);
	    	System.out.println(savedSeat);
	    }
	    
	    

	    return ResponseEntity.ok("예약이 성공적으로 처리되었습니다.");
	}

	@PostMapping("/data")
	public ResponseEntity<String> getNewData(@RequestBody OrderDTO reservationDTO) {
		String id = reservationDTO.getSeqPfjoinIds().get(0).toString();
	    Long idAsLong = Long.valueOf(id);
	    
	    String time = reservationDTO.getSelectedTime();
        String times = time.replaceAll("[^0-9:]", "");
		
		SeatId seatId = new SeatId(idAsLong, reservationDTO.getSelectedDate(),times );
	    SeatEntity seat = seatRepository.findById(seatId).orElse(null);
	   
	    // `result` 변수 초기화
	    String result = "No data available";
	    
	    if (seat == null) {
	    	System.out.println("No");
	    } else {
	    	result = seat.getSoldSeat();
	    	System.out.println(result);
	    }
		
	    return ResponseEntity.ok(result);
	}
	

}