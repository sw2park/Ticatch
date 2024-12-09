package com.danaojo.ticatch.order.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.order.Entity.OrderDTO;
import com.danaojo.ticatch.order.Entity.TestPFJoinDTO;
import com.danaojo.ticatch.order.repository.OrderRepository;
import com.danaojo.ticatch.order.service.OrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor // lombok 에서 지원하는 의존성 주입 따로 안적어도되게 해주는거
public class OrderController {

	private final OrderRepository orderRepository;

	private final OrderService orderService;

	// 전체 조회 (테스트용)
	@GetMapping
	public List<TestPFJoinDTO> Order() {
		List<TestPFJoinDTO> order = orderRepository.findAll();
		System.out.println(order);
		return order;
	}

	// seqPfjoinId 로 동일한 값만 조회
	@GetMapping("/{seqPfjoinId}")
	public List<TestPFJoinDTO> getOrderById(@PathVariable Long seqPfjoinId) {
		List<TestPFJoinDTO> findBySeqPfJoinId = orderRepository.findBySeqPfjoinId(seqPfjoinId);
		
		return findBySeqPfJoinId;
	}

	// 예매 버튼 눌르면 여기로 옴 테이블에 데이터 저장 하는거임
	@PostMapping("/reservation")
	public ResponseEntity<String> createReservation(@RequestBody OrderDTO orderListDTO) {
		String result = orderService.createOrder(orderListDTO);
		
		return ResponseEntity.ok(result);
	}

	// 날짜 및 회차 바꾸면 이거 실행됨 계속 올바른 값 조회해서 돌려줌
	@PostMapping("/data")
	public ResponseEntity<String> getNewData(@RequestBody OrderDTO seatDTO) {
		String result =orderService.getSoldSeats(seatDTO);
		
		return ResponseEntity.ok(result);
	}

}


