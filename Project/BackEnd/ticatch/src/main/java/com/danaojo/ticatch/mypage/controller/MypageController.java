package com.danaojo.ticatch.mypage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danaojo.ticatch.mypage.dto.ConfirmDTO;
import com.danaojo.ticatch.mypage.service.MypageService;

@CrossOrigin(origins = "http://localhost:3001")
@RestController
public class MypageController {
	String testName = "user02";
	
	@Autowired
	private MypageService mypageService;
	
	@GetMapping("/mypage/searchConfirm")
	public List<ConfirmDTO> searchConfirm() {
		List<ConfirmDTO> confirmList = mypageService.returnConfirmDTO(testName);
		
		return confirmList;
	}
}