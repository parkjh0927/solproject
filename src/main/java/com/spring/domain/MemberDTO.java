package com.spring.domain;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor @NoArgsConstructor
@Getter @Setter @ToString
public class MemberDTO {
	private String userid;
	private String password;
	private String email;
	
	private int postcode;
	private String address;
	private String address2;
	
	private boolean enabled;
	
	private List<MemberAuthorityDTO> authorities;
		
}
