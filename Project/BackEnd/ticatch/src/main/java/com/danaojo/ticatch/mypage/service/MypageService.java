package com.danaojo.ticatch.mypage.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danaojo.ticatch.mypage.dto.ConfirmDTO;
import com.danaojo.ticatch.mypage.entity.Orders;
import com.danaojo.ticatch.mypage.repository.OrdersRepository;
import com.danaojo.ticatch.mypage.repository.PfJoinRepository;
import com.danaojo.ticatch.mypage.repository.UsersRepository;

import jakarta.transaction.Transactional;

@Service
public class MypageService {
	@Autowired
	private UsersRepository usersRepository;
	
	@Autowired
	private OrdersRepository ordersRepository;
	
	@Autowired
	private PfJoinRepository pfJoinRepository;
	
	@Transactional
	public List<ConfirmDTO> returnConfirmDTO(String userName) {
		List<ConfirmDTO> confirmList = new ArrayList<>();
		
		Long userSeq = getUserSeq(userName);
		
		int testCnt = 1;
		List<Orders> orderList = getMypageOrder(userSeq);
		for(Orders ocDto : orderList) {
			ConfirmDTO cDto = new ConfirmDTO();
			
			cDto.setAblecancleDate(ocDto.getCancel_date());
			cDto.setCancel_status(ocDto.getCancel_status());
			cDto.setPf_title(getTitle(ocDto.getSeq_pfjoin_id().getSeq_pfjoin_id()));
			cDto.setSeq_order_id(ocDto.getSeq_order_id());
			cDto.setTotal_ticket(ocDto.getTotal_ticket());
			cDto.setView_date(ocDto.getView_date());
			
			confirmList.add(cDto);
		}
		return confirmList; 
	}
	
	public String getTitle(Long pfJoinSeq) {
		return pfJoinRepository.getTitle(pfJoinSeq);
	}
	
	public List<Orders> getMypageOrder(Long userSeq) {
		return ordersRepository.getOrderDto(userSeq);
	}
	
	public int getOrderCount(Long userSeq) {
		return ordersRepository.findByOrderCount(userSeq);
	}
	
	public Long getUserSeq(String userName) {
		return usersRepository.findByUser_Name(userName);
	}
}