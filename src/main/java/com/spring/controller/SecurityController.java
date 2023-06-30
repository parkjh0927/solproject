package com.spring.controller;


import java.security.Principal;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
	
	@Autowired
	private BCryptPasswordEncoder encoder;

	@GetMapping("/register")
	public void registerGet() {
		log.info("�쉶�썝媛��엯 �뤌 �슂泥�");
	}	

	@PostMapping("/register")
	public String registerPost(MemberDTO dto) {
		log.info("�쉶�썝媛��엯 �슂泥� " +dto);
		
		String path = service.register(dto) ? "redirect:/member/login" : "/member/register";
		return path;
	}

	@GetMapping("/login")
	public void loginGet() {
		log.info("濡쒓렇�씤 �뤌 �슂泥� ");		
	}
				
	
	
	@GetMapping("/login-error")
	public String loginError(Model model) {
		model.addAttribute("error", "<span style=\"color: red;\"></span>");
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
		
	

	@RequestMapping(value = "/memberIdChk", method = RequestMethod.POST) // /member/memberIdChk
	@ResponseBody
	public String memberIdChkPost(String username) throws Exception {	
		log.info("memberIdChk() 吏꾩엯");	
		
		boolean result = service.idCheck(username);
		if(result) {			
			return "fail";	
		} else {			
			return "success";	
		}	
	}
	
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/myPage")	
    public void myPageGet(Principal principal, Model model) {

        String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);	
    }

	@PreAuthorize("isAuthenticated()")
	@GetMapping("/modify")
	public void modifyGet(Principal principal, Model model) {
		log.info("�쉶�썝�젙蹂� �닔�젙 �뤌 �슂泥� ");	
		String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);						
	}

	@PreAuthorize("isAuthenticated()")
	@PostMapping("/modify")
	public String modifyPost(MemberDTO dto) {
		log.info("�쉶�썝 �젙蹂� �닔�젙 " +dto);
		
		String path = service.modify(dto) ? "redirect:/member/myPage" : "/member/myPage";
		return path;
	}
	
	@PreAuthorize("isAuthenticated()")
	@GetMapping("/leave")
	public void leaveGet(Principal principal, Model model) {
		log.info("�쉶�썝 �깉�눜 �럹�씠吏� �슂泥�");		
		String username=principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
	}

	@PostMapping("/leave")
	public String leavePost(LeaveDTO leaveDTO, HttpSession session, RedirectAttributes redirectAttributes) {
		log.info("�쉶�썝 �깉�눜 �슂泥�"+leaveDTO);
						
		if(service.leave(leaveDTO)) {
			session.invalidate();
			SecurityContextHolder.clearContext();	//�떆�걧由ы떚�쓽 �꽭�뀡 珥덇린�솕
			return "redirect:/";
		}
		redirectAttributes.addFlashAttribute("failMessage", "鍮꾨�踰덊샇媛� �씪移섑븯吏� �븡�뒿�땲�떎.");
		return "redirect:/member/leave";
	}

	@PreAuthorize("isAuthenticated()")
	@GetMapping("/changePwd")
	public void changePwdGet(Principal principal, Model model) {
		log.info("鍮꾨�踰덊샇 蹂�寃� �럹�씠吏� �슂泥�");
		String username = principal.getName();
        
        MemberDTO dto = service.read(username);
        model.addAttribute("dto",dto);
	}	

	@PreAuthorize("isAuthenticated()")
	@PostMapping("/changePwd")
	public String changePwdPost(PasswordDTO passwordDTO, HttpSession session, RedirectAttributes redirectAttributes) {
		log.info("鍮꾨�踰덊샇 蹂�寃� �슂泥�" +passwordDTO);
		
		if(passwordDTO.passwordEquals()) { // �깉鍮꾨쾲怨� �깉鍮꾨쾲�솗�씤�씠 �씪移섑븯�뒗 寃쎌슦	
			if(service.changePwd(passwordDTO)) { 
				session.invalidate();
				SecurityContextHolder.clearContext();
				return "redirect:/member/login";
			}			
		}
		redirectAttributes.addFlashAttribute("failMessage", "鍮꾨�踰덊샇媛� �씪移섑븯吏� �븡�뒿�땲�떎.");
		return "redirect:/member/changePwd";		
	}	

	
	// 鍮꾨쾲李얘린 �뤌 蹂댁뿬二쇨린
	@GetMapping("/findPwd")
	public void findPwdGet() {
		log.info("鍮꾨쾲李얘린 �뤌 �슂泥� ");		
	}
	
	// 鍮꾨쾲李얘린 硫붿씪�쟾�넚
	@PostMapping("/findPwd")
	public String findPwdPost(MemberDTO dto, RedirectAttributes redirectAttributes) {
		MemberDTO memberDto = service.read(dto.getUsername());
		log.info("鍮꾨쾲李얘린 " +dto);
		
		if (memberDto != null) { // 鍮꾨�踰덊샇 �옱�꽕�젙�쓣 �쐞�븳 �븘�씠�뵒媛� 議댁옱�븯�뒗 寃쎌슦
	        if (service.findPwd(memberDto)) {
	            // 鍮꾨�踰덊샇 �옱�꽕�젙 �꽦怨�
	            redirectAttributes.addFlashAttribute("successMessage", "�엫�떆鍮꾨�踰덊샇媛� 諛쒖넚�릺�뿀�뒿�땲�떎");
	        } else {
	            // 鍮꾨�踰덊샇 �옱�꽕�젙 �떎�뙣
	            redirectAttributes.addFlashAttribute("failMessage", "�엫�떆 鍮꾨�踰덊샇 諛쒖넚�뿉 �떎�뙣�뻽�뒿�땲�떎");
	        }
	    } else {
	        // �엯�젰�븳 �븘�씠�뵒媛� 議댁옱�븯吏� �븡�뒗 寃쎌슦
	        redirectAttributes.addFlashAttribute("failMessage", "�븘�씠�뵒媛� 議댁옱�븯吏� �븡�뒿�땲�떎");
	    }
	    return "redirect:/member/findPwd";
	}

	
	
	
	

}


