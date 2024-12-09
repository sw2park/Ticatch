package com.danaojo.ticatch.entity;

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
	@SequenceGenerator(name = "Save_seq", sequenceName = "seq_sabe_id", allocationSize = 1)
	private Long seq_save_id;
	
	private Long seq_pfjoin_id;
	
	@ManyToOne
	@JoinColumn(name = "seq_users_id")
	private Users seq_users_id;
}
