package com.danaojo.ticatch.order.controller;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.order.Entity.OrderDTO;
import com.danaojo.ticatch.order.Entity.PFJoinDTO;
import com.danaojo.ticatch.order.Entity.UserDTO;
import com.danaojo.ticatch.order.repository.OrderRepository;
import com.danaojo.ticatch.order.repository.UserRepository;
import com.danaojo.ticatch.order.service.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor // lombok 에서 지원하는 의존성 주입 따로 안적어도되게 해주는거
public class OrderController {

	private final OrderRepository orderRepository;

	private final OrderService orderService;

	private final UserRepository userRepository;

	// 전체 조회
	@GetMapping
	public List<PFJoinDTO> Order() {
		List<PFJoinDTO> order = orderRepository.findAll();

		return order;
	}

	// seqPfjoinId 로 동일한 값만 조회
	@GetMapping("/{seqPfjoinId}")
	public List<PFJoinDTO> getOrderById(@PathVariable Long seqPfjoinId) {
		List<PFJoinDTO> findBySeqPfJoinId = orderRepository.findBySeqPfjoinId(seqPfjoinId);

		return findBySeqPfJoinId;
	}

	// 날짜 및 회차 바꾸면 이거 실행됨 계속 올바른 값 조회해서 돌려줌
	@PostMapping("/data")
	public ResponseEntity<String> getNewData(@RequestBody OrderDTO seatDTO) {
		String result = orderService.getSoldSeats(seatDTO);

		return ResponseEntity.ok(result);
	}

	// 예매 버튼 눌르면 여기로 옴 테이블에 데이터 저장 하는거임 (토스페이 결제 API)
	@PostMapping("/pay")
	public ResponseEntity<String> createReservation(@RequestBody OrderDTO orderListDTO) {
		String result = orderService.createOrder(orderListDTO);

		return ResponseEntity.ok(result);
	}

	// 메인 페이지 매핑 (뒤에서부터 값 가지고옴 중에 좌석 팔린 순서로 랭킹 할거임)
	@GetMapping("/rank")
	public List<PFJoinDTO> Rank() {
		// Sort by seqPfjoinId in descending order
		Sort descSort = Sort.by(Sort.Direction.DESC, "seqPfjoinId");
		List<PFJoinDTO> rank = orderRepository.findAll(descSort);

//	    String result = orderService.findRank();

		// 5개만 보낼거임
		if (rank.size() > 5) {
			return rank.subList(0, 5);
		}

		return rank; // 데이터가 5개보다 적으면 다 보냄
	}

	// 로그인
	@PostMapping("/login")
	public ResponseEntity<UserDTO> login(@RequestBody UserDTO userDTO) {
		try {
			UserDTO response = orderService.login(userDTO);
			System.out.println("Login successful");
			return ResponseEntity.ok(response);
		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
			return ResponseEntity.status(400).body(null); // Return 400 Bad Request on error
		}
	}

	// 회원가입
	@PostMapping("/signup")
	public ResponseEntity<String> signUp(@RequestBody UserDTO userDTO) {
		System.out.println("here");
		
		return orderService.saveUser(userDTO);
		
	}
}
