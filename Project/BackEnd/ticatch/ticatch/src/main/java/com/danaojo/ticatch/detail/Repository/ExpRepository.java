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
	
	// 기대평 갯수 조회
	public Long countExps(Long seq_pfjoin_id) {
		return em.createQuery(
				"SELECT COUNT(e) FROM Expectation e WHERE e.seq_pfjoin_id = :seq_pfjoin_id", 
	            Long.class)
				.setParameter("seq_pfjoin_id", seq_pfjoin_id)
				.getSingleResult();
	}
	
//	return em.createQuery(
//            "SELECT COUNT(r) FROM Review r WHERE r.seq_pfjoin_id = :seq_pfjoin_id", 
//            Long.class)
//            .setParameter("seq_pfjoin_id", seq_pfjoin_id)
//            .getSingleResult();
	
	// 해당 공연 기대평 조회
	public List<Expectation> findExps(Long seq_pfjoin_id) {
		return em.createQuery(
				"SELECT e FROM Expectation e WHERE seq_pfjoin_id = :seq_pfjoin_id ORDER BY e.exp_date DESC", 
				Expectation.class)
				.setParameter("seq_pfjoin_id", seq_pfjoin_id)
				.getResultList();
	}

	// 리뷰 저장
	public void save(Expectation expectation) {
		em.persist(expectation);
	}

}
