package com.spring.service;



import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberDTO;

public interface MemberService {
	//회원가입
	public boolean register(MemberDTO dto);	
	//정보조회
	public MemberDTO read(String username);	
	//아이디중복체크
	public boolean idCheck(String username);
	//정보수정
	public boolean modify(MemberDTO dto);	
	//회원탈퇴
	public boolean leave(LeaveDTO leaveDTO);
	
	
}
