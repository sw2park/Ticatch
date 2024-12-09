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
@Table(name = "SAVE")
@Getter @Setter
public class Save {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Save_seq")
	@SequenceGenerator(name = "Save_seq", sequenceName = "seq_save_id", allocationSize = 1)
	private Long seq_save_id;
		
	@ManyToOne
	@JoinColumn(name = "seq_user_id")
	private Users seq_user_id;
	
	@ManyToOne
	@JoinColumn(name = "seq_pfjoin_id")
	private PFJoin seq_pfjoin_id;
}
