package com.danaojo.ticatch.detail.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.danaojo.ticatch.detail.Repository.ReviewRepository;
import com.danaojo.ticatch.detail.domain.OrderEntity;
import com.danaojo.ticatch.detail.domain.Review;
import com.danaojo.ticatch.detail.dto.ReviewOrderDTO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {
	
	@Autowired
	private final ReviewRepository reviewRepository;
	
	// 리뷰 갯수 카운트
	public Long countReviews(Long seq_pfjoin_id) {
		return reviewRepository.countReviews(seq_pfjoin_id);
	}
	
	// 리뷰 별점 평균
	public ResponseEntity<Double> avgRate(Long seq_pfjoin_id) {
	    Double averageRating = reviewRepository.avgRate(seq_pfjoin_id);

	    if (averageRating == null) {
	        // 평균값이 없으면 204 No Content를 반환
	        return ResponseEntity.noContent().build();
	    }

	    return ResponseEntity.ok(averageRating); // 평균값을 200 OK로 반환
	}

//	public ResponseEntity<Double> avgRate(Long seq_pfjoin_id) {
//		return reviewRepository.avgRate(seq_pfjoin_id);
//	}
	
	// 해당 공연의 리뷰 찾기
	@Transactional(readOnly = true)
	public List<Review> findReviews(Long seq_pfjoin_id) {
		return reviewRepository.findReviews(seq_pfjoin_id);
	}
	// 관람자 표시를 위한 리뷰 조회
	@Transactional(readOnly = true)
	public List<ReviewOrderDTO> findReviewsOrders(Long seqPfjoinId) {
		return reviewRepository.findReviewsOrders(seqPfjoinId);
	}
	
	// 관람자 표시
//	@Transactional(readOnly = true)
//	public List<OrderEntity> viewUser(Long seq_review_id) {
//		return reviewRepository.viewUser(seq_review_id);
//	}

	// 리뷰 저장
	@Transactional
	public void saveReview(Review review) {
		reviewRepository.save(review);
	}

}
