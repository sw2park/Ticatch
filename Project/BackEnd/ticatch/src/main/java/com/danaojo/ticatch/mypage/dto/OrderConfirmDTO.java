package com.danaojo.ticatch.mypage.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class OrderConfirmDTO {
	private Long seq_order_id;
	private Long seq_pfjoin_id;
	private Long seq_userid;
	private String buy_date;
	private String cancle_date;
	private String cancel_status;
	private String place;
	private String seat_num;
	private String total_sum;
	private String total_ticket;
	private String view_date;
	private String view_time;
}
