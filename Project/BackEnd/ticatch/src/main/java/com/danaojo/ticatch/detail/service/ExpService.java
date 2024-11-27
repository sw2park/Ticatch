package com.danaojo.ticatch.detail.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.detail.Repository.ExpRepository;
import com.danaojo.ticatch.detail.domain.Expectation;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ExpService {
	
	@Autowired
	private final ExpRepository expRepository;
	
	public List<Expectation> findExps(Long seq_pfjoin_id) {
		return expRepository.findExp(seq_pfjoin_id);
	}

	public void saveExp(Expectation expectation) {
		expRepository.save(expectation);
	}

}
