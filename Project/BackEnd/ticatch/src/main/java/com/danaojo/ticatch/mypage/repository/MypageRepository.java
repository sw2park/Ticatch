package com.danaojo.ticatch.mypage.repository;

import org.springframework.stereotype.Repository;

import com.danaojo.ticatch.mypage.entity.Users;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MypageRepository {
	@PersistenceContext
	private final EntityManager em;
	
	// 유저 조회용
	public Long findUserSeq(String userId) {
		return (Long) em.createQuery("SELECT seq_user_id FROM USERS u WHERE user_name = :userId")
				.setParameter("userid", userId)
				.getSingleResult();
//		return em.find(Users.class, userId).getSeq_user_id();
	}
	
	// 예매 확인 테이블 추가용
	public void findBy(Long seq_user_id) {
		
		
	}
}