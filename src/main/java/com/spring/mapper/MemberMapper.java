package com.spring.mapper;


import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;
import com.spring.domain.PasswordDTO;

public interface MemberMapper {
	public int register(MemberDTO dto);
	public int registerAuth(MemberAuthorityDTO dto);
	
	public MemberDTO read(String username);
	
	public int idCheck(String username);
	public int modify(MemberDTO dto);
	public int changePwd(PasswordDTO passwordDTO);	
	public int leave(String username);
}
