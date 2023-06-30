package com.spring.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CustomAccessDeniedHandler implements AccessDeniedHandler {

	@Override
	public void handle(HttpServletRequest request, HttpServletResponse response,
			AccessDeniedException accessDeniedException) throws IOException, ServletException {
		
		log.info("�젒洹� �젣�븳 �빖�뱾�윭..............");
	    // 액세스 거부 에러 메시지 로깅
        log.info("Access Denied: {}", accessDeniedException.getMessage());

		// response 媛앹껜�뿉 �젙蹂대�� �떞嫄곕굹 �뿉�윭 �럹�씠吏�濡� �씠�룞
		response.sendRedirect("/member/denied");

	}

}
