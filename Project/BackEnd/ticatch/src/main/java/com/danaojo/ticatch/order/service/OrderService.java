package com.danaojo.ticatch.order.service;

import org.springframework.stereotype.Service;

@Service
public class OrderService {

		public int splitAndCount(String totalSeatCount) {
			// 정규식을 사용하여 양쪽에 문자 또는 숫자가 있는 , 기준으로 나누기
	        String[] parts = totalSeatCount.split("(?<=[a-zA-Z0-9]),(?=[a-zA-Z0-9])");
			
			return parts.length;	// 티켓 개수 리턴
		}
}
