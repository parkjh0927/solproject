package com.spring.controller;


import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.domain.CustomUser;
import com.spring.domain.MemberDTO;
import com.spring.service.MemberService;
import com.spring.service.SnsLoginService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class SnsLoginController {
	
	@Autowired
	private MemberService service;
	
	@Autowired
	private SnsLoginService snsService;
	
	@Autowired
	private BCryptPasswordEncoder encoder;
	
	
	// 카카오 로그인
	@RequestMapping(value="/kakaoLogin", method=RequestMethod.GET)
	public String kakaoLogin(@RequestParam(value = "code", required = false) String code, HttpSession session) throws Exception {
		System.out.println("카카오 로그인 테스트" + code);
			
		// 접속 토큰 가져오기
		String access_Token = snsService.getAccessToken(code);
		
	    // 접속자 정보 가져오기
		HashMap<String, Object> userInfo = snsService.getUserInfo(access_Token);
		System.out.println("###access_Token#### : " + access_Token);
		System.out.println("###nickname#### : " + userInfo.get("nickname"));
		System.out.println("###email#### : " + userInfo.get("email"));			
			
		//email 
		String email = (String) userInfo.get("email");
		
		//id 생성 (email의 @앞부분)
		int atIndex = email.indexOf("@");
		String username = email.substring(0, atIndex);
		System.out.println("아이디"+username);						
		
		MemberDTO dto = new MemberDTO();
		// 일치하는 아이디 없을시 회원가입 (id를 암호화해서 비번으로 저장)
		if(!service.idCheck(username)) {
			log.info("카카오로 회원가입 시작");
			dto.setUsername(username);
			dto.setPassword(username);
			dto.setEmail(email);
			service.register(dto);
		}
		// 일치하는 아이디가 있으면 로그인
		// Security Authentication 주입 
		// CustomUser user = new CustomUser(username, password, Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
		Authentication auth = new UsernamePasswordAuthenticationToken(username, null, Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
		SecurityContextHolder.getContext().setAuthentication(auth);
		System.out.println("시큐리티 권한" +auth);
			
	    return "redirect:/";		
	    }


	
	
	// 네이버 로그인 
	@RequestMapping(value="naverCallback", method=RequestMethod.GET)
	public String callBack(){
		return "/member/naverCallback";
	}	
	 
	@RequestMapping(value="naverSave", method=RequestMethod.POST)
	@ResponseBody
	public String naverSave(@RequestParam("n_email") String n_email) {
	
		System.out.println("네이버 정보 넘어오나요"+n_email);
	
		MemberDTO dto = new MemberDTO();
		
		//id 생성 (email의 @앞부분)
		int atIndex = n_email.indexOf("@");
		String username = n_email.substring(0, atIndex);
		System.out.println("네이버 아이디"+username);					
		
		// ajax 결과
		String result = "ok";
						
		// 일치하는 아이디 없을시 회원가입
		if(!service.idCheck(username)) {
			log.info("네이버로 회원가입 시작");
			dto.setUsername(username);
			dto.setPassword(username);
			dto.setEmail(n_email);
			service.register(dto);
		}
		// 일치하는 아이디가 있으면 로그인
		// Security Authentication 주입 
		Authentication auth = new UsernamePasswordAuthenticationToken(username, null, Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
		SecurityContextHolder.getContext().setAuthentication(auth);
		System.out.println("시큐리티 권한" +auth);
				
		return result;	        
	} 
	
	
	
	
	 
	 

		

	

}
