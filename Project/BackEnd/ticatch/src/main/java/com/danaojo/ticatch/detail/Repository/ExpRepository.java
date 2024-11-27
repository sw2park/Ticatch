package com.danaojo.ticatch.detail.Repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.danaojo.ticatch.detail.domain.Expectation;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ExpRepository {
	
	@Autowired
	private final EntityManager em;
	
	// 해당 공연 기대평 조회
		public List<Expectation> findExp(Long seq_pId) {
			return em.createQuery(
					"select r from Expctation r where seq_pfjoin_id = :seq_pId", 
					Expectation.class)
					.getResultList();
		}

}
