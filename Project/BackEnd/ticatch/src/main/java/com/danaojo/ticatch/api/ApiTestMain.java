package com.danaojo.ticatch.api;

import com.danaojo.ticatch.api.kopis.Kopis;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

public class ApiTestMain {
	public static void main(String[] args) throws JsonMappingException, JsonProcessingException {
		Kopis kopis = new Kopis();
		String id = "PF254755";
//		kopis.callConcertList();
//		kopis.callConcertDetail(id);
		String name = "FC001247";
		System.out.println(kopis.callFacilityDetail(name));
	}
}
