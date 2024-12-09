package com.danaojo.ticatch.detail.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.api.repository.PFJoin;
import com.danaojo.ticatch.detail.domain.Expectation;
import com.danaojo.ticatch.detail.domain.Review;
import com.danaojo.ticatch.detail.domain.Seat;
import com.danaojo.ticatch.detail.dto.ExpectationDTO;
import com.danaojo.ticatch.detail.dto.ReviewDTO;
import com.danaojo.ticatch.detail.service.ExpService;
import com.danaojo.ticatch.detail.service.ProductService;
import com.danaojo.ticatch.detail.service.ReviewService;
import com.danaojo.ticatch.detail.service.SeatService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
// @RequestMapping(value = "json", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class DetailController {
	
	@Autowired
	private final ProductService productService;
	private final SeatService seatService;
	private final ReviewService reviewService;
	private final ExpService expService;
	
	// 상품 시퀀스 아이디 받아오기 9090에 json 형식으로 출력
	@GetMapping(value = "/detail/{seq_pfjoin_id}", produces = "application/json")
	public PFJoin idOne(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		// System.out.println(seq_pfjoin_id);
	    return productService.findOne(seq_pfjoin_id); 
	}
	
	// 시퀀스 아이디로 상품 상세 정보 조회
	@GetMapping("/detail/{seq_pfjoin_id}/view")
	//@GetMapping(value = "/detail/{seq_pfjoin_id}/view", produces = "application/json")
    public List<PFJoin> detailList(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		return productService.detailList(seq_pfjoin_id);
    }
	
	
	// 해당 공연의 날짜의 회차의 잔여좌석 조회
	@GetMapping("/detail/seat/{seqPfjoinId}/{selectDate}/{selectTime}/view")
	public int seatView(@PathVariable("seqPfjoinId") Long seqPfjoinId, @PathVariable("selectDate") String selectDate, @PathVariable("selectTime") String selectTime) {
		return seatService.seatView(seqPfjoinId, selectDate, selectTime);
	}
	
	
	// Tab 메뉴 테스트
	@GetMapping("/tabTest")
	public String tatbTest() {
		return "test";
	}
	
	// Tab 리뷰 조회
	@GetMapping("/detail/{seq_pfjoin_id}/review")
	public List<Review> findReview(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		return reviewService.findReviews(seq_pfjoin_id);
	}
	
	// Tab 기대평 조회
	@GetMapping("/detail/{seq_pfjoin_id}/exp")
	public List<Expectation> findExp(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		return expService.findExps(seq_pfjoin_id);
	}
	
	
	// 리뷰 저장
	@PostMapping("/detail/review/new")
	public String createReview(@RequestBody ReviewDTO reviewDto) {
		Review review = new Review();		
		review.setUser_id(reviewDto.getUser_id());
		review.setSeq_pfjoin_id(reviewDto.getSeq_pfjoin_id());
		review.setReview_content(reviewDto.getReview_content());
		review.setReview_date(reviewDto.getReview_date());
		review.setRating(reviewDto.getRating());
		
		reviewService.saveReview(review);
		
		return "redirect:/";
	}
	
	// 기대평 저장
	@PostMapping("/detail/exp/new")
	public String createExp(@RequestBody ExpectationDTO expDto) {
		Expectation exp = new Expectation();
		exp.setUser_id(expDto.getUser_id());
		exp.setSeq_pfjoin_id(expDto.getSeq_pfjoin_id());
		exp.setExp_content(expDto.getExp_content());
		exp.setExp_date(expDto.getExp_date());
		
		expService.saveExp(exp);
		
		return "redirect:/";
	}
 
}
