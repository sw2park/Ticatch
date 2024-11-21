package com.danaojo.ticatch.order.service;

import org.springframework.stereotype.Service;

import com.danaojo.ticatch.order.DTO.PerformanceEntity;
import com.danaojo.ticatch.order.DTO.PerformanceRepository;

@Service
public class PerformanceService {

	private final PerformanceRepository performanceRepository;

	public PerformanceService(PerformanceRepository performanceRepository) {
		this.performanceRepository = performanceRepository;
	}

	public PerformanceEntity savePerformance(PerformanceEntity performance) {
		if (performance.getPrice() <= 0) {
			throw new IllegalArgumentException("가격은 0보다 커야 합니다.");
		}
		return performanceRepository.save(performance);
	}
}
