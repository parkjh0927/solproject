package com.spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("accommodation")
@Controller
@Slf4j
public class AccomController {



	@GetMapping("/accommodation")
	public void feslistGet() {
		log.info("accommodation");

	}


}
