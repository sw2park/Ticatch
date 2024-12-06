package com.danaojo.ticatch.detail.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ReviewDTO {
	private int seq_review_id;
	private String user_id;
	private Long seq_pfjoin_id;
	private String review_content;
	private String review_date;
	private String rating;
	
}
