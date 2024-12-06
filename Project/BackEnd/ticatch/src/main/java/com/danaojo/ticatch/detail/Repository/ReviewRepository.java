package com.danaojo.ticatch.detail.Repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.danaojo.ticatch.detail.domain.Review;
import com.querydsl.jpa.impl.JPAQueryFactory;

import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import lombok.RequiredArgsConstructor;


@Repository
@RequiredArgsConstructor
public class ReviewRepository {
	
	@Autowired
//	private final EntityManager em;
	EntityManagerFactory emf
	= Persistence.createEntityManagerFactory("ticatch");
	EntityManager em = emf.createEntityManager();
	EntityTransaction tx = em.getTransaction();
	JPAQueryFactory queryFactory = new JPAQueryFactory(em);
	

	// 해당 공연 리뷰 조회
	public List<Review> findReviews(Long seq_pfjoin_id) {
		return em.createQuery(
				"SELECT r FROM Review r WHERE seq_pfjoin_id = :seq_pfjoin_id", 
				Review.class)
				.setParameter("seq_pfjoin_id", seq_pfjoin_id)
				.getResultList();
	}

	// 리뷰 저장
	public void save(Review review) {
		em.persist(review);
	}

}
