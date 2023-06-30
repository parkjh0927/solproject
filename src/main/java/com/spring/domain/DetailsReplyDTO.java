package com.spring.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetailsReplyDTO {
	
	private int rno;
	private String contentid;
	private String dereply;
	private String username;
	private Data dereplyDate;
	private Data deupdateDate;
	
}
