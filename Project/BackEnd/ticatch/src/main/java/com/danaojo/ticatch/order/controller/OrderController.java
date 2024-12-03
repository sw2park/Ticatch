package com.danaojo.ticatch.order.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.danaojo.ticatch.order.repository.OrderRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {
	public final OrderRepository orderRepository;

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
	    order.setSeatNum(seatNumbers.substring(0, seatNumbers.length() - 2)); // 마지막 ", " 제거

	    // 데이터 저장
	    OrderEntity savedOrder = orderRepository.save(order);

	    // 디버깅 출력
	    System.out.println("저장된 데이터: " + savedOrder);

	    return ResponseEntity.ok("예약이 성공적으로 처리되었습니다.");
	}


}