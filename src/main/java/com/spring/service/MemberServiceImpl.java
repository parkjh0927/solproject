package com.spring.service;


import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberAuthorityDTO;
import com.spring.domain.MemberDTO;
import com.spring.domain.PasswordDTO;
import com.spring.mapper.MemberMapper;
import com.spring.util.MailUtil;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberMapper mapper;
	
	@Autowired
	private BCryptPasswordEncoder encoder;	
	
	@Autowired
    private MailUtil mailUtil;
	
	
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
			System.out.println("비번 체크"+leaveDTO.getCheckPassword());
			System.out.println("저장된 비번"+dto.getPassword());
			// 회원 탈퇴 작업 수행
			return mapper.leave(leaveDTO.getUsername())==1; // 회원 정보 삭제시 true 반환			
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
			// 일치시 변경할 비밀번호 암호화, 비번 업데이트
			passwordDTO.setNewPassword(encoder.encode(passwordDTO.getNewPassword()));					
			return mapper.changePwd(passwordDTO)==1; // 비번 업데이트시 true반환			
		} 
		return false;
	}


	@Override
	public boolean findPwd(MemberDTO dto) {
		// 해당 아이디 불러오기		
		MemberDTO memberDto = mapper.read(dto.getUsername());
				
		String username = memberDto.getUsername();
		String beforePwd = memberDto.getPassword();
    	
		System.out.println("아이디"+username);
		System.out.println("진입 전 기존비번"+beforePwd);
		
	    if (idCheck(username)) {
	        // 아이디가 존재하는 경우
	        try {
	            // 기존 비밀번호
	        	System.out.println("if 진입후 기존비번"+beforePwd);
	            
	            // 임시 비밀번호 생성
	            String tempPwd = UUID.randomUUID().toString().replace("-", ""); // - 제거
	            tempPwd = tempPwd.substring(0,8); // 8자리로 자름
	            System.out.println("임시비밀번호 생성"+tempPwd);
	            
	            // 임시 비밀번호 dto에 담기
	            memberDto.setPassword(tempPwd);
	            
	            // 이메일 전송
	            mailUtil.sendEmail(memberDto);
	            
	            // 비밀번호를 암호화해서 다시 담기
	            String newPwd = encoder.encode(memberDto.getPassword());
	            memberDto.setPassword(newPwd);
	            
	            // 비밀번호 변경
	            PasswordDTO pwDto = new PasswordDTO(memberDto.getUsername(), beforePwd, newPwd, newPwd);
	            mapper.changePwd(pwDto);
	            
	            return true; // 비밀번호 재설정 성공
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    } 
	    return false; // 비밀번호 재설정 실패
	}

	

	


	

	
	



}






