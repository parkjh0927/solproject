package com.spring.controller;


import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
	// 회원가입 성공 시 login 이동
	//          실패 시 register 이동
	@PostMapping("/register")
	public String registerPost(MemberDTO dto) {
		log.info("회원가입 요청 " +dto);
		
		String path = service.register(dto) ? "redirect:/member/login" : "/member/register";
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
	
	@GetMapping("/denied")
	public String accessDenied() {
		return "/member/denied";
	}	
	
	@GetMapping("/auth")
	@ResponseBody
	public Authentication auth() {		
		return SecurityContextHolder.getContext().getAuthentication(); 
	}

	
	
	
	
	// 중복 아이디 점검
	@RequestMapping(value = "/memberIdChk", method = RequestMethod.POST) // /member/memberIdChk에 대한 POST 메서드를 처리
	@ResponseBody //컨트롤러 작업이 완료될때 결과값으로 리턴시킴 (뷰 리졸버를 동작시키지 않음) 
	public void memberIdChkPost(String username) throws Exception {	
		log.info("memberIdChk() 진입");							
	}


	// 마이페이지 보여주기
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/myPage")	
    public void myPageGet(Principal principal, Model model) {
		
        // log.info("마이페이지 요청 유저아이디: "+principal.getName());
        String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
		
        log.info("마이페이지 요청 유저아이디: "+dto.getUsername());
        log.info("마이페이지 요청 비번: "+dto.getPassword());
        log.info("마이페이지 요청 메일: "+dto.getEmail());
        log.info("마이페이지 요청 우편: "+dto.getPostcode());
        log.info("마이페이지 요청 주소: "+dto.getAddress());
        log.info("마이페이지 요청 주소2: "+dto.getAddress2());
		
    }
	
	// 회원 정보 수정 폼
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/modify")
	public void modifyGet(Principal principal, Model model) {
		log.info("회원정보 수정 폼 요청 ");	
		String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
						
	}
	
	// 회원 정보 수정
	@PostMapping("/modify")
	public String modifyPost(MemberDTO dto) {
		log.info("회원 정보 수정 " +dto);
		
		String path = service.modify(dto) ? "redirect:/member/myPage" : "/member/myPage";
		return path;
	}
	

}


