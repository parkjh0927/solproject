package com.spring.controller;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Arrays;
import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
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

import com.spring.domain.CustomUser;
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
		//비밀번호 생성 (id를 암호화)
		String password = encoder.encode(username);
		System.out.println("비밀번호"+password);
			
		// Security Authentication 주입 
		CustomUser user = new CustomUser(username, password, Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
		Authentication auth = new UsernamePasswordAuthenticationToken(username, password, Arrays.asList(new SimpleGrantedAuthority("ROLE_USER")));
		SecurityContextHolder.getContext().setAuthentication(auth);
		System.out.println("시큐리티 권한" +auth);
			
		// 로그아웃 처리 시, 사용할 토큰 값
	    session.setAttribute("access_Token", access_Token);
	    session.setAttribute("user", user);

	    return "redirect:/";		
	    }

	

		
		
	    
	 @RequestMapping(value = "/kakaoLogout", method = RequestMethod.GET)
	 public String kakaoLogout() {

	     SecurityContextHolder.clearContext();	//시큐리티의 세션 초기화
	     
	     return "redirect:/";	     
	    }
	 

	 
	 
	 
	 

		
//		@RequestMapping("/kakaoLogout")
//		public String logout(HttpServletRequest request) {
//			HttpSession session = request.getSession();
//			String access_Token = (String)session.getAttribute("access_Token");
//			//String user = (String) session.getAttribute("user");
//			log.info("로그아웃 요청");
//			
//			if (access_Token != null && !"".equals(access_Token)) {
//				snsService.logout(access_Token);
//				log.info("로그아웃 토큰"+access_Token);
//				log.info("로그아웃 유저"+session.getAttribute("user"));
//				session.removeAttribute("access_Token");
//				session.removeAttribute("user");
//				SecurityContextHolder.clearContext();	//시큐리티의 세션 초기화
//				
//				log.info("logout success");
//			}
//			
//			return "redirect:/";
//		}
	
	

}
