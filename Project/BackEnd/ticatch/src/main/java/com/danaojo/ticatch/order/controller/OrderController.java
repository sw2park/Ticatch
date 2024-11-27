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

//	@GetMapping("/{seqPfjoinId}")
//	@GetMapping
	public List<Order> Order() {

		List<Order> order = orderRepository.findAll();

		System.out.println(order.size());

		return order;
	}

	// 테스트
	// 지금 보니 id 값만 리턴해서 남어지 데이터가 없네
	
	@GetMapping("/{id}")
	public List<Order> getOrderById(@PathVariable Long id) {
	    System.out.println(id);
		return orderRepository.findBySeqPfjoinId(id);
	}

}