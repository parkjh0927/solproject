package com.spring.service;



import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberDTO;
import com.spring.domain.PasswordDTO;

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
	//비번수정
	public boolean changePwd(PasswordDTO passwordDTO);	
	//비번찾기
	public boolean findPwd(MemberDTO dto);	
	
	
	
}
