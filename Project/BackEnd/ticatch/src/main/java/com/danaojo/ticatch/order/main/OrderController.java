package com.danaojo.ticatch.order.main;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.order.DTO.PerformanceEntity;
import com.danaojo.ticatch.order.DTO.PerformanceRepository;

@RestController
@RequestMapping("/api/order")
public class OrderController {

	private final PerformanceRepository performanceRepository;

	public OrderController(PerformanceRepository performanceRepository) {
		this.performanceRepository = performanceRepository;
	}

	// 전체 데이터 조회
	@GetMapping
	public List<PerformanceEntity> getAllPerformances() {
		return performanceRepository.findAll();
	}
	

}
