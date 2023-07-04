package com.spring.domain;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor @AllArgsConstructor @ToString @Getter @Setter
public class DetailsReplyDTO {
	
	private int rno;
	private String contentid;
	private String dereply;
	private String username;
	private Date dereplyDate;
	private Date deupdateDate;
	private String formattedDate;
	
}
