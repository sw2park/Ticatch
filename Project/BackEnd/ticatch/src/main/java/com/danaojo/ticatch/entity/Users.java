package com.danaojo.ticatch.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "USERS")
@Getter @Setter
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Users_seq")
	@SequenceGenerator(name = "Users_seq", sequenceName = "seq_users_id", allocationSize = 1)
	private Long seq_users_id;
	
	private String user_id;
	private String user_pw;
	private String user_name;
	private String user_phone;
	private String user_email;
	private String login_type;
	private String u_create_date;
	private String u_update_date;
}