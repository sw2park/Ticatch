package com.danaojo.ticatch.api.testController;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.danaojo.ticatch.api.kopis.Kopis;
import com.danaojo.ticatch.api.kopis.dto.ConcertListDTO;
import com.danaojo.ticatch.api.service.KopisService;
import com.danaojo.ticatch.api.util.KopisUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

@Controller
public class testController {
	@Autowired
	private KopisService kopisService;
	
	@RequestMapping("/api/save")
	public String saveList() throws JsonMappingException, JsonProcessingException {
		kopisService.savePerformList();
		
		return null;
	}
	
	@RequestMapping("/api/detailSave")
	public String saveDetail() throws JsonMappingException, JsonProcessingException {
		Kopis kopis = new Kopis();
		KopisUtil util = new KopisUtil();
		
		List<ConcertListDTO> cList = kopis.apiConcertList();
		List<String> performId = util.returnPerformId(cList);
		
		kopisService.savePerformDetail(performId);
		return null;
	}
	

}
