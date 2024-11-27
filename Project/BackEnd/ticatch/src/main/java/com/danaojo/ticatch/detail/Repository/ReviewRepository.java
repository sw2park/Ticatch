package com.danaojo.ticatch.detail.Repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.danaojo.ticatch.detail.domain.Review;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ReviewRepository {
	
	@Autowired
	private final EntityManager em;
	
	// 해당 공연 리뷰 조회
	public List<Review> findReview(Long seq_pId) {
		return em.createQuery(
				"select r from Review r where seq_pfjoin_id = :seq_pId", 
				Review.class)
				.getResultList();
	}

	// 리뷰 저장
	public void save(Review review) {
		em.persist(review);
	}

}
