package com.danaojo.ticatch.detail.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ReviewDTO {
	private int review_id;
	private String user_id;
	private String seq_pfjoin_id;
	private String review_content;
	private String review_date;
	private String rating;
	
}
