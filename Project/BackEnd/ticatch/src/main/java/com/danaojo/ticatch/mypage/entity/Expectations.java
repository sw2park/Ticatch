package com.danaojo.ticatch.mypage.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "EXPECTATIONS")
@Getter @Setter
public class Expectations {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Expectation_seq")
	@SequenceGenerator(name = "Expectation_seq", sequenceName = "seq_expectation_id", allocationSize = 1)
	private Long seq_expectation_id;
	
	private String user_id;
	private String exp_content;
	private String exp_date;
	
	@ManyToOne
	@JoinColumn(name = "seq_user_id")
	private Users seq_user_id;
	
	@ManyToOne
	@JoinColumn(name = "seq_pfjoin_id")
	private PFJoin seq_pfjoin_id;
}