package com.danaojo.ticatch.order.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SaveDTO {
	private int seqsaveid;
	private String userid;
	private Long seqpfjoinid;
	
	public SaveDTO() {}

	public SaveDTO(int seqsaveid, String userid, Long seqpfjoinid) {
		super();
		this.seqsaveid = seqsaveid;
		this.userid = userid;
		this.seqpfjoinid = seqpfjoinid;
	}

	
	
}
