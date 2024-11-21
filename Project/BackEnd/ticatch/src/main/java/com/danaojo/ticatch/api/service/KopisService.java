package com.danaojo.ticatch.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.api.kopis.Kopis;
import com.danaojo.ticatch.api.kopis.dto.ConcertListDTO;
import com.danaojo.ticatch.api.repository.KopisRepository;
import com.danaojo.ticatch.api.repository.PerformList;
import com.danaojo.ticatch.api.util.KopisUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

import jakarta.transaction.Transactional;

@Service
public class KopisService {
	@Autowired
	private KopisRepository kopisRepository;

	@Transactional
	public void savePerformList() throws JsonMappingException, JsonProcessingException {
		Kopis kopis = new Kopis();
		KopisUtil util = new KopisUtil();

		// DTO를 받고
		List<ConcertListDTO> cList = kopis.apiConcertList();
		// 변환을 하고
		List<PerformList> pList = util.returnPerformList(cList);
		
		System.out.println("cList Size : " + cList.size());
		System.out.println("pList SIZE : " + pList.size());
		// 저장을 한다.
		for (int i = 0; i < pList.size(); i++) {
			kopisRepository.saveConcertList(pList.get(i));
		}
	}
}
