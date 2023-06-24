package com.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;
import com.spring.domain.PasswordDTO;
import com.spring.mapper.MemberMapper;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberMapper mapper;
	
	@Autowired
	private BCryptPasswordEncoder encoder;	
	
	@Override
	@Transactional
	public boolean register(MemberDTO dto) {	
		
		// 비밀번호 암호화
		dto.setPassword(encoder.encode(dto.getPassword()));		
		
		// 회원가입
		boolean result = mapper.register(dto) == 1;
		
		// 회원권한
		mapper.registerAuth(new MemberAuthorityDTO(dto.getUsername(), "ROLE_USER"));
		//mapper.registerAuth(new MemberAuthorityDTO(dto.getUsername(), "ROLE_ADMIN"));
		
		return result;		
	}
	

	@Override
    public MemberDTO read(String username) {		
        return mapper.read(username);       
    }


	@Override
	public boolean modify(MemberDTO dto) {
		return mapper.modify(dto)==1? true:false;
	}


	@Override
	public boolean leave(LeaveDTO leaveDTO) {
		// 해당 아이디 불러오기	
		MemberDTO dto = mapper.read(leaveDTO.getUsername());
		
		// matches(암호화하기 전 코드, db에 암호화된 코드)
		if(encoder.matches(leaveDTO.getCheckPassword(), dto.getPassword())) {
			return true;			
		} 		
		return false;				
	}


	@Override
	public boolean idCheck(String username) {		
		return mapper.idCheck(username)==1? true:false;
	}


	@Override
	public boolean changePwd(PasswordDTO passwordDTO) {
		// 해당 아이디 불러오기
		MemberDTO dto = mapper.read(passwordDTO.getUsername());
		
		// 비번 일치 확인 (사용자가 입력한 기존 비번, db에 암호화된 비번)				
		if(encoder.matches(passwordDTO.getCurrentPassword(), dto.getPassword())) {					
			//일치시 변경할 비밀번호 암호화, 비번 업데이트
			passwordDTO.setNewPassword(encoder.encode(passwordDTO.getNewPassword()));					
			return mapper.changePwd(passwordDTO)==1? true:false;			
		} 
		return false;
	}


	


	

	
	



}






