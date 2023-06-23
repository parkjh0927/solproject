package com.spring.mapper;


import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;

public interface MemberMapper {
	public int register(MemberDTO dto);
	public int registerAuth(MemberAuthorityDTO dto);
	
	public MemberDTO read(String username);
	
	public int idCheck(String username);
	public int modify(MemberDTO dto);
	
	
	public int leave(LeaveDTO leaveDTO);
}
