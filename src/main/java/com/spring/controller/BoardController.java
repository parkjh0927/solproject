package com.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.service.TravelService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("board")
@Controller
@Slf4j
public class BoardController {



	@GetMapping("/main")
	public void feslistGet() {
		log.info("게시판/공지사항");

	}


}
