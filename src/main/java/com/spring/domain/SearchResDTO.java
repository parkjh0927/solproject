package com.spring.domain;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchResDTO {
	
	//받을 아이템들 리스트로 담기 
	private List<SearchItemsDTO> item = new ArrayList<SearchItemsDTO>();
	
	


}
