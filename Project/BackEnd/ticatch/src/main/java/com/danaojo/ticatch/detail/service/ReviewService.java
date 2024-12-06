package com.danaojo.ticatch.detail.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.detail.Repository.ReviewRepository;
import com.danaojo.ticatch.detail.domain.Review;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReviewService {
	
	@Autowired
	private final ReviewRepository reviewRepository;
	
	// 해당 공연의 리뷰 찾기
	public List<Review> findReviews(Long seq_pfjoin_id) {
		return reviewRepository.findReviews(seq_pfjoin_id);
	}

	public void saveReview(Review review) {
		reviewRepository.save(review);
	}

}
