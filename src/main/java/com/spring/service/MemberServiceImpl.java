package com.spring.service;

import java.lang.reflect.Member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;
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


	


	

	
	



}





