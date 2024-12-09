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
@Table(name = "MYPAGE_ORDER")
@Getter @Setter
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "Order_seq")
	@SequenceGenerator(name = "Order_seq", sequenceName = "seq_order_id", allocationSize = 1)
	private Long seq_order_id;
	
	private String cancel_status;
	private String cancel_date;
	private String buy_date;
	private String total_sum;
	private String total_ticket;
	private String view_date;
	private String view_time;
	private String seat_num;
	private String place;
	
	@ManyToOne
	@JoinColumn(name = "seq_user_id")
	private Users seq_user_id;
	
	@ManyToOne
	@JoinColumn(name = "seq_pfjoin_id")
	private PFJoin seq_pfjoin_id;
}