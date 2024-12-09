package com.danaojo.ticatch.mypage.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.mypage.repository.MypageRepository;

@Service
public class MypageService {
	@Autowired
	private MypageRepository mypageRepository;
	
	public Long returnUserSeq() {
		return mypageRepository.findUserSeq("user2"); 
	}
	

}