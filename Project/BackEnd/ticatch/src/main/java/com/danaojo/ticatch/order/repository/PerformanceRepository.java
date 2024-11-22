package com.danaojo.ticatch.order.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PerformanceRepository extends JpaRepository<PerformanceEntity, Long> {
	// JpaRepository<T, ID>에서 T는 엔티티 클래스, ID는 기본 키 타입입니다.
	// 테이블의 PK 따라 맞춰줘야됨

	Optional<PerformanceEntity> findByPerformanceId(String performanceId);
	
	
}

