package com.spring.controller;


import java.security.Principal;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.spring.domain.CustomUser;
import com.spring.domain.LeaveDTO;
import com.spring.domain.MemberDTO;
import com.spring.domain.PasswordDTO;
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
	
	// 회원가입 성공 시 login, 실패 시 register 이동
	@PostMapping("/register")
	public String registerPost(MemberDTO dto, Model model) {
		log.info("회원가입 요청 " +dto);
		
		if(service.register(dto)) {
			model.addAttribute("register", "회원가입에 성공했습니다");
			return "/member/login";
		} 	
		return "/member/register";		      		
	}
		
	
	// 로그인
	@GetMapping("/login")
	public void loginGet() {
		log.info("로그인 폼 요청 ");		
	}
					
	
	@GetMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("error", "아이디나 비밀번호를 확인해주세요");
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
	@ResponseBody  
	public String memberIdChkPost(String username) throws Exception {	
		log.info("memberIdChk() 진입");	
		
		boolean result = service.idCheck(username);
		if(result) {			
			return "fail";	// 중복 아이디가 존재			
		} else {			
			return "success";	// 중복 없음			
		}	
	}
	

	// 마이페이지 보여주기
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/myPage")	
    public void myPageGet(Principal principal, Model model) {
		
        // log.info("마이페이지 요청 유저아이디: "+principal.getName());
        String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
		
//        log.info("마이페이지 요청 유저아이디: "+dto.getUsername());
//        log.info("마이페이지 요청 비번: "+dto.getPassword());
//        log.info("마이페이지 요청 메일: "+dto.getEmail());
//        log.info("마이페이지 요청 우편: "+dto.getPostcode());
//        log.info("마이페이지 요청 주소: "+dto.getAddress());
//        log.info("마이페이지 요청 주소2: "+dto.getAddress2());		
    }

	
	// 회원 정보 수정 폼 보여주기
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/modify")
	public void modifyGet(Principal principal, Model model) {
		log.info("회원정보 수정 폼 요청 ");	
		String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);						
	}
			
	// 회원 정보 수정
	@PreAuthorize("isAuthenticated()")
	@PostMapping("/modify")
	public String modifyPost(MemberDTO dto) {
		log.info("회원 정보 수정 " +dto);
		
		String path = service.modify(dto) ? "redirect:/member/myPage" : "/member/myPage";
		return path;
	}
	

	
	// 회원 탈퇴 폼 보여주기
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/leave")
	public void leaveGet(Principal principal, Model model) {
		log.info("회원 탈퇴 페이지 요청");		
		String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
	}
	
	// 회원 탈퇴
	@PostMapping("/leave")
	public String leavePost(LeaveDTO leaveDTO, HttpSession session, RedirectAttributes redirectAttributes) {
		log.info("회원 탈퇴 요청"+leaveDTO);
						
		if(service.leave(leaveDTO)) {
			session.invalidate();
			SecurityContextHolder.clearContext();	//시큐리티의 세션 초기화
			return "redirect:/";
		}
		redirectAttributes.addFlashAttribute("failMessage", "비밀번호가 일치하지 않습니다.");
		return "redirect:/member/leave";
	}
	
	
	// 비밀번호 변경 폼 보여주기
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/changePwd")
	public void changePwdGet(Principal principal, Model model) {
		log.info("비밀번호 변경 페이지 요청");
		String username = principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
	}	
	
	// 비밀번호 변경
	@PreAuthorize("isAuthenticated()")
	@PostMapping("/changePwd")
	public String changePwdPost(PasswordDTO passwordDTO, HttpSession session, RedirectAttributes redirectAttributes) {
		log.info("비밀번호 변경 요청" +passwordDTO);
		
		if(passwordDTO.passwordEquals()) { // 새비번과 새비번확인이 일치하는 경우	
			if(service.changePwd(passwordDTO)) { 
				session.invalidate();
				SecurityContextHolder.clearContext();
				return "redirect:/member/login";
			}			
		}
		redirectAttributes.addFlashAttribute("failMessage", "비밀번호가 일치하지 않습니다.");
		return "redirect:/member/changePwd";		
	}	

	
	// 비번찾기 폼 보여주기
	@GetMapping("/findPwd")
	public void findPwdGet() {
		log.info("비번찾기 폼 요청 ");		
	}
	
	// 비번찾기 메일전송
	@PostMapping("/findPwd")
	public String findPwdPost(MemberDTO dto, RedirectAttributes redirectAttributes) {
		MemberDTO memberDto = service.read(dto.getUsername());
		log.info("비번찾기 " +dto);
		
		if (memberDto != null) { // 비밀번호 재설정을 위한 아이디가 존재하는 경우
	        if (service.findPwd(memberDto)) {
	            // 비밀번호 재설정 성공
	            redirectAttributes.addFlashAttribute("successMessage", "임시비밀번호가 발송되었습니다");
	        } else {
	            // 비밀번호 재설정 실패
	            redirectAttributes.addFlashAttribute("failMessage", "임시 비밀번호 발송에 실패했습니다");
	        }
	    } else {
	        // 입력한 아이디가 존재하지 않는 경우
	        redirectAttributes.addFlashAttribute("failMessage", "아이디가 존재하지 않습니다");
	    }
	    return "redirect:/member/findPwd";
	}

	
	
	
	

}


