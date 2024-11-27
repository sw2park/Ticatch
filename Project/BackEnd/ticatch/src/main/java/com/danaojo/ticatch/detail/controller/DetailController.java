package com.danaojo.ticatch.detail.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.api.repository.PFJoin;
import com.danaojo.ticatch.detail.domain.Expectation;
import com.danaojo.ticatch.detail.domain.Review;
import com.danaojo.ticatch.detail.dto.ExpectationDTO;
import com.danaojo.ticatch.detail.dto.ReviewDTO;
import com.danaojo.ticatch.detail.service.ExpService;
import com.danaojo.ticatch.detail.service.ProductService;
import com.danaojo.ticatch.detail.service.ReviewService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class DetailController {
	
	@Autowired
	private final ProductService productService;
	private final ReviewService reviewService;
	private final ExpService expService;
	
	// 공연 아이디(pd_id)로 상품 상세 정보 조회
	@GetMapping("/detail/{pd_id}/view")
    public String productView(Model model, @PathVariable("pd_id") Long pd_id) {
		PFJoin prd = productService.findOne(pd_id);
		
		return null;
    }
	
	// tab 상세정보 이미지
	@GetMapping("/detail/{seq_pfjoin_id}/detailTab")
	public String detailTab(@PathVariable("seq_pfjoin_id") int seq_pfjoin_id) {
		//Product prd = productService.detailTab(seq_pfjoin_id);
		
		return null;
	}
	
	// 리뷰 조회
	@GetMapping("/detail/{seq_pfjoin_id}/review")
	public String reviewView(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		List<Review> reviews = reviewService.findReviews(seq_pfjoin_id);
		return null;
	}
	
	// 기대평 조회
	@GetMapping("/detail/{seq_pfjoin_id}/exp")
	public List<Expectation> expView(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		List<Expectation> exps = expService.findExps(seq_pfjoin_id);
	
		return exps;
	}
	
	// 리뷰 저장	-> 공연 아이디 받아와야되나
	@GetMapping("detail/reviw/new")
	public String createReview(ReviewDTO reviewDto) {
		Review review = new Review();
		reviewService.saveReview(review);
		return null;
	}
	
	// 기대평 저장
	@GetMapping("detail/exp/new")
	public String createExp(ExpectationDTO expDto) {
		Expectation exp = new Expectation();
		expService.saveExp(exp);
		return null;
	}
	
	// 
	
	// 공연, 전시 상세페이지 구분
//	@GetMapping("/detail/{pd_id}/view")
//	public String productView01(@PathVariable("pd_id") String pd_id, Model model) {
//	    // "PF"로 시작하는지 확인
//	    if (pd_id.startsWith("PF")) {
//	        // "PF"로 시작하는 경우
//	        Product product = productRepository.findByPdId(pd_id); // Repository를 통해 조회
//	        if (product == null) {
//	            return "error/404"; // 해당 ID가 없을 경우 404 페이지로 이동
//	        }
//	        model.addAttribute("product", product);
//	        return "detail/pf_view"; // "PF"로 시작하는 상세 페이지
//	    } else {
//	        // "PF"로 시작하지 않는 경우
//	        PerformDetail performDetail = performRepository.findByPdId(pd_id); // 다른 Repository 사용
//	        if (performDetail == null) {
//	            return "error/404"; // 해당 ID가 없을 경우 404 페이지로 이동
//	        }
//	        model.addAttribute("performDetail", performDetail);
//	        return "detail/perform_view"; // 다른 상세 페이지
//	    }
//	}
	
	// 데이터 전달 테스트
	@GetMapping("/detail/{seq_pfjoin_id}")
	public PFJoin test1(@PathVariable("seq_pfjoin_id") Long seq_pfjoin_id) {
		System.out.println(""+productService.findOne(seq_pfjoin_id));
	    return productService.findOne(seq_pfjoin_id); 
	}
	
	
//	@GetMapping("/detail/{seq_pfjoin_id}")
//	public String test1(@PathVariable("seq_pfjoin_id") int seq_pfjoin_id) {
//		PFJoin search = productService.findOne(seq_pfjoin_id); 
//		String testData = ""+search.getP_title();
//		System.out.println(testData);
//	    return  testData;
//	}
	
//	@GetMapping("/details/{seq_pfjoin_id}")
//	public List<PFJoin> test2(@PathVariable("seq_pfjoin_id") int seq_pfjoin_id) {
//		System.out.println(""+productService.dataTest(seq_pfjoin_id));
//	    return productService.dataTest(seq_pfjoin_id); 
//	}

	// 데이터 전달 테스트
	@GetMapping("/test")
	public String Test() {
		return "hi";
	}
}
