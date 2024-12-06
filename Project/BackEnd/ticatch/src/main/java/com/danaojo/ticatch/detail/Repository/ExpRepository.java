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
	public List<Expectation> findExps(Long seq_pfjoin_id) {
		return em.createQuery(
				"SELECT r FROM Expectation r WHERE seq_pfjoin_id = :seq_pfjoin_id", 
				Expectation.class)
				.setParameter("seq_pfjoin_id", seq_pfjoin_id)
				.getResultList();
	}

	// 리뷰 저장
	public void save(Expectation expectation) {
		em.persist(expectation);
	}
}
