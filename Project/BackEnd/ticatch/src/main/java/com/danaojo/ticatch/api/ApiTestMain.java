package com.danaojo.ticatch.api;

import java.util.ArrayList;
import java.util.List;

import com.danaojo.ticatch.api.kopis.Kopis;
import com.danaojo.ticatch.api.kopis.dto.ConcertListDTO;
import com.danaojo.ticatch.api.repository.KopisRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public class ApiTestMain {
	public static void main(String[] args) throws JsonMappingException, JsonProcessingException {
		KopisRepository kopisRepository = new KopisRepository(null);
		Kopis kopis = new Kopis();
		
		List<ConcertListDTO> testList = new ArrayList<>();
		testList = kopis.apiConcertList();
		
		String testId;
		
//		System.out.println("List Size : " + testList.size());
		for(int i=0; i<testList.size(); i++) {
			ConcertListDTO cDto = new ConcertListDTO();
			
			cDto = testList.get(i);
			
//			System.out.println(cDto.getPl_id());
//			kopisRepository.saveConcertList(cDto);			
		}
	
//		for(int i=0; i<testList.size(); i++) {
//			testId =  testList.get(i).getId();
//			kopis.concertDetail(testId);
//		}
	}
}
