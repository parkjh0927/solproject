package com.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.service.TravelService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("travel")
@Controller
@Slf4j
public class TravelController {

	@Autowired
	private TravelService service;

	@GetMapping("/festival")
	public void feslistGet() {
		log.info("축제 페이지 요청");

	}

	@GetMapping("/performance")
	public void perlistGet() {
		log.info("축제 페이지 요청");

	}
}
