package com.danaojo.ticatch.mypage.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.danaojo.ticatch.mypage.dto.confirmDTO;
import com.danaojo.ticatch.mypage.service.MypageService;

@Controller
public class MypageController {
	@Autowired
	private MypageService mypageService;
	
	@RequestMapping("/mypage/searchConfirm")
	public String searchConfirm() {
		System.out.println(mypageService.returnUserSeq().toString());
//		List<confirmDTO> confirmList = new ArrayList<>();
		
		return "";
	}
}