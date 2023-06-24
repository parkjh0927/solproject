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
	private String username;	//아이디
	private String password;	//비밀번호
	private String email;		//이메일
	
	private String postcode;	//우편번호
	private String address;		//주소
	private String address2;	//상세주소
	
	private boolean enabled;	//사용자 계정의 활성화 여부(시큐리티)
	
	private List<MemberAuthorityDTO> authorities;
		
}
