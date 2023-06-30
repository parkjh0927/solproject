package com.spring.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CriteriaDTO {
	
	private int page;
	private int amount;
	
	public CriteriaDTO() {
		this(1,10);
	}
	
	public CriteriaDTO(int page, int amount) {
		super();
		this.page = page;
		this.amount = amount;
	}
	
	

}
