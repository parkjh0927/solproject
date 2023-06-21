package com.spring.mapper;

import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;

public interface MemberMapper {
	public int register(MemberDTO dto);
	public int registerAuth(MemberAuthorityDTO dto);
	
	public MemberDTO read(String userid);
	
	public int dupId(String userid);
	public int leave(String userid);
}
