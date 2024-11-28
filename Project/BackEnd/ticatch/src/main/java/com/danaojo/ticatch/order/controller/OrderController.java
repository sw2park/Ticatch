package com.danaojo.ticatch.order.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.order.Entity.Order;
import com.danaojo.ticatch.order.repository.OrderRepository1;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {
	public final OrderRepository1 orderRepository;

	// 전체 조회
	@GetMapping
	public List<Order> Order() {

		List<Order> order = orderRepository.findAll();

		System.out.println(order.size());

		return order;
	}

	// seqPfjoinId 로 동일한 값만 조회
	@GetMapping("/{seqPfjoinId}")
	public List<Order> getOrderById(@PathVariable Long seqPfjoinId) {
		
		System.out.println(seqPfjoinId);
	    
	    List<Order> findBySeqPfJoinId = orderRepository.findBySeqPfjoinId(seqPfjoinId);
	    
	    return findBySeqPfJoinId;
	} 

}