package com.spring.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;


import com.spring.domain.MemberDTO;
import com.spring.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/member")
public class SecurityController {
	
	@Autowired
	private MemberService service;
	
	
	// 회원가입
	@GetMapping("/register")
	public void registerGet() {
		log.info("회원가입 폼 요청");
	}	
	
	// 회원가입 성공 시 index 이동
	//          실패 시 register 이동
	@PostMapping("/register")
	public String registerPost(MemberDTO dto) {
		log.info("회원가입 요청 " +dto);
		
		String path = service.register(dto) ? "redirect:/" : "/member/register";
		return path;
	}
	
	
	// 로그인
	@GetMapping("/login")
	public void loginGet() {
		log.info("로그인 폼 요청 ");		
	}
	
			

	
	
	@GetMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("error", "아이디나 비밀번호를 확인해 주세요");
		return "/member/login"; 
	}
	
	@GetMapping("/access-denied")
	public String accessDenied() {
		return "/member/denied";
	}	
	
	@GetMapping("/auth")
	@ResponseBody
	public Authentication auth() {		
		return SecurityContextHolder.getContext().getAuthentication(); 
	}


	// 중복 아이디 점검
	@PostMapping("/dupId")
	@ResponseBody //컨트롤러 작업이 완료될때 결과값으로 리턴시킴 (뷰 리졸버를 동작시키지 않음) 
	public String dupIdCheck(String userid) {
		log.info("중복 아이디 체크 "+userid);
			
		boolean idCheck = service.dupId(userid);
			
		if(idCheck) {
			return "true";  // 	/WEB-INF/views/true.jsp
		} else {
			return "false";  // 	/WEB-INF/views/false.jsp
		}
	}





}


