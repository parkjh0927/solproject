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
		log.info("festival");

	}

	@GetMapping("/performance")
	public void perlistGet() {
		log.info("performance");

	}
	
	@GetMapping("/destination")
	public void destination() {
		log.info("여행지 페이지 요청");
		 
	}
	
	@GetMapping("/details")
	public void details() {
		log.info("여행지 상세 페이지 요청");
	}
	
	@GetMapping("/search")
	public void search() {
		log.info("검색 요청");
	}
	
	@GetMapping("/tab")
	public void tab() {
		log.info("검색 요청");
	}
}
