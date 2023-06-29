package com.spring.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WishListDTO {
	
	private String userid;
	private String title;
	private String tel;
	private String firstimage2;
	private String addr1;

}
