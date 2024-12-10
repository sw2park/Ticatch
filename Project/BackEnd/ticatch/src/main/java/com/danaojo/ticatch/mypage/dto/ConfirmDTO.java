package com.danaojo.ticatch.mypage.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ConfirmDTO {
	// 마이페이지 기준
	private Long seq_order_id; // 예매번호
	private String pf_title; // 티켓명
	private String view_date; // 관람일시
	private String total_ticket; // 매수
	private String ablecancleDate; // 취소가능일
	private String cancel_status; // 상태	
}
