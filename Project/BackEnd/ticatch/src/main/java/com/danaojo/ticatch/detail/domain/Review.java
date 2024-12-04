package com.danaojo.ticatch.detail.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Review {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_review_id")
	@SequenceGenerator(name = "seq_review_id", sequenceName = "seq_review_id", allocationSize = 1)
	private int review_id;
	
	private String user_id;
	private String seq_pfjoin_id;
	private String review_content;
	private String review_date;
	private String rating;
	
}
