package com.spring.service;


import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;

public interface MemberService {
	//회원가입
	public boolean register(MemberDTO dto);	
	//중복 아이디 체크
	public boolean dupId(String userid);
	
	
}
