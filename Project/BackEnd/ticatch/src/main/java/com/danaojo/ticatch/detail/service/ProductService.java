package com.danaojo.ticatch.detail.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.danaojo.ticatch.api.repository.PFJoin;
import com.danaojo.ticatch.detail.Repository.ProductRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {

	@Autowired
	private final ProductRepository productRepository;
	
	// 공연, 전시 상품 id 조회
	public PFJoin findOne(Long seq_pfjoin_id) {
		return productRepository.findOne(seq_pfjoin_id);
	}
	
	
	// 데이터 전달 테스트
	public List<PFJoin> dataTest(Long seq_pfjoin_id) {
		return productRepository.detaList(seq_pfjoin_id);
	}
}
