package com.spring.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.domain.SearchResDTO;
import com.spring.domain.WishListDTO;
import com.spring.service.TravelService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/travel")
@Controller
@Slf4j
public class TravelController {

	@Autowired
	private TravelService service;

	
	@GetMapping("/destination")
	public void destination() {
		log.info("여행지 페이지 요청");
		 
	}
	
	@GetMapping("/details")
	public void details() {
		log.info("여행지 상세 페이지 요청");
	}
	
	
	
	@GetMapping("/search")
	public void search(String search, Model model) {
		log.info("검색 요청",search);
		
		
		SearchResDTO result = service.search(search);
		
		model.addAttribute("result", result);
		model.addAttribute("search", search);
		
		
	}
	@GetMapping("/mywishlist")
	public void mtwishlist() {
		log.info("위시리스트 폼 요청");
	}
	
	@PostMapping("/mywishlist")
	public String insert(WishListDTO dto) {
		log.info("위시리스트 추가");
		service.insert(dto);
		return "/travel/mywishlist";
	}
	
	@GetMapping("delete")
	public String delete(String contentid) {
		log.info("위시리스트 삭제 요청");
		
		service.delete(contentid);
		
		return "redirect:/travel/mywishlist";
	}
	
	public void getRow(Model model) {
		log.info("위시리스트 목록 요청");
		
		List<WishListDTO> list = service.getRow();
		
		model.addAttribute("list", list);
	}
	

	@GetMapping("/festival")
	public void feslistGet() {
		log.info("festival");

	}

	@GetMapping("/performance")
	public void perlistGet() {
		log.info("performance");

	}
	

}


