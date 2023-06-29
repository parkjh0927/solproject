package com.spring.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchItemsDTO {
	
	//받아올것들 
	private String addr1;
	private String contentid;
	private String contenttypeid;
	private String firstimage2;
	private String tel;
	private String title;
	

}
