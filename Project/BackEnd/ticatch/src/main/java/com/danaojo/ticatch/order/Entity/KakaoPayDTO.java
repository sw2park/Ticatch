package com.danaojo.ticatch.order.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter @Setter @ToString
public class KakaoPayDTO {

	private String id;
	private String date;
	private String seat;
	private String totalprice;
	
}
