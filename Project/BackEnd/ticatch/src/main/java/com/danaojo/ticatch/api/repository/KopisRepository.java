package com.danaojo.ticatch.api.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class KopisRepository {
	@PersistenceContext
	private final EntityManager em;
	
	// API 공연 목록 저장
	public void saveConcertList(PerformList performList) {
		em.persist(performList);
		
	}
	
	// API 공연 상세 내용 저장
	public void savePerformDetail(PerformDetail performDetail) {
		em.persist(performDetail);
	}
}
