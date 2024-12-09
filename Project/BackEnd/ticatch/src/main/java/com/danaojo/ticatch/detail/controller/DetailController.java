package com.danaojo.ticatch.detail.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.detail.domain.Expectation;
import com.danaojo.ticatch.detail.domain.Review;
import com.danaojo.ticatch.detail.domain.Seat;
import com.danaojo.ticatch.detail.dto.ExpectationDTO;
import com.danaojo.ticatch.detail.dto.ReviewDTO;
import com.danaojo.ticatch.detail.service.ExpService;
import com.danaojo.ticatch.detail.service.ProductService;
import com.danaojo.ticatch.detail.service.ReviewService;
import com.danaojo.ticatch.detail.service.SeatService;
import com.danaojo.ticatch.mypage.entity.PFJoin;

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
	
	// 해당 공연의 날짜의 회차의 복합키 조합이 존재하지 않을 경우 레코드 생성
	@GetMapping("/detail/seat/{seatId}/create")
	public String createSeat() {
		return null;
	}
	
	
	// 해당 공연의 날짜의 회차의 잔여좌석 조회
//	@GetMapping("/detail/seat")
//	public Seat seatView(
//	        @RequestParam("seqPfjoinId") Long seqPfjoinId,
//	        @RequestParam("selectDate") String selectDate,
//	        @RequestParam("selectTime") String selectTime) {
//	    return seatService.seatView(seqPfjoinId, selectDate, selectTime);
//	}
	@GetMapping("/detail/seat/{seqPfjoinId}/{selectDate}/{selectTime}/view")
	public int seatView(@PathVariable("seqPfjoinId") Long seqPfjoinId, @PathVariable("selectDate") String selectDate, @PathVariable("selectTime") String selectTime) {
		return seatService.seatView(seqPfjoinId, selectDate, selectTime);
	}
	
	
	
	// Tab 상세정보 이미지
	@GetMapping("/detail/{seq_pfjoin_id}/detailTab")
	public String detailTab(@PathVariable("seq_pfjoin_id") int seq_pfjoin_id) {
		//Product prd = productService.detailTab(seq_pfjoin_id);
		
		return null;
	}
	
	// Tab 리뷰 조회
	@GetMapping("/detail/{seq_pfjoin_id}/review")
	public String reviewView(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		List<Review> reviews = reviewService.findReviews(seq_pfjoin_id);
		return null;
	}
	
	// Tab 기대평 조회
	@GetMapping("/detail/{seq_pfjoin_id}/exp")
	public List<Expectation> expView(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		List<Expectation> exps = expService.findExps(seq_pfjoin_id);
	
		return exps;
	}
	
	// 리뷰 저장	-> 공연 아이디 받아와야되나
	@GetMapping("/detail/reviw/new")
	public String createReview(ReviewDTO reviewDto) {
		Review review = new Review();
		reviewService.saveReview(review);
		return null;
	}
	
	// 기대평 저장
	@GetMapping("/detail/exp/new")
	public String createExp(ExpectationDTO expDto) {
		Expectation exp = new Expectation();
		expService.saveExp(exp);
		return null;
	}
 
}
