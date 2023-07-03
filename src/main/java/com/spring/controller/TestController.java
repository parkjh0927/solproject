package com.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Controller @RequestMapping("/") @Slf4j
public class TestController {
	
	@GetMapping("/test")
	public void mapGet() {
		log.info("mapø‰√ª");
		
	}
}
