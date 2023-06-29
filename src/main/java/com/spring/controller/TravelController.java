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
		log.info("�뿬�뻾吏� �럹�씠吏� �슂泥�");
		 
	}
	
	@GetMapping("/details")
	public void details() {
		log.info("�뿬�뻾吏� �긽�꽭 �럹�씠吏� �슂泥�");
	}
	
	@PostMapping("/details")
	public void detailsPost() {
		log.info("상세페이지 포스트 요청");
	}
	
	@GetMapping("/search")
	public void search(String search, Model model) {
		log.info("寃��깋 �슂泥�",search);
		
		
		SearchResDTO result = service.search(search);
		
		model.addAttribute("result", result);
		model.addAttribute("search", search);
		
		
	}
	@GetMapping("/mywishlist")
	public void mtwishlist() {
		log.info("�쐞�떆由ъ뒪�듃 �뤌 �슂泥�");
	}
	
	@PostMapping("/mywishlist")
	public String insert(WishListDTO dto) {
		log.info("�쐞�떆由ъ뒪�듃 異붽�");
		service.insert(dto);
		return "/travel/mywishlist";
	}
	
	@GetMapping("delete")
	public String delete(String contentid) {
		log.info("�쐞�떆由ъ뒪�듃 �궘�젣 �슂泥�");
		
		service.delete(contentid);
		
		return "redirect:/travel/mywishlist";
	}
	
	public void getRow(Model model) {
		log.info("�쐞�떆由ъ뒪�듃 紐⑸줉 �슂泥�");
		
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


