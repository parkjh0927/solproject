package com.spring.controller;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.domain.DetailsReplyDTO;
import com.spring.domain.SearchResDTO;
import com.spring.domain.WishListDTO;
import com.spring.service.ReplyService;
import com.spring.service.TravelService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/travel")
@Controller
@Slf4j
public class TravelController {

	@Autowired
	private TravelService service;
	@Autowired
	private ReplyService Reservice;
	
	@GetMapping("/destination")
	public void destination() {
		log.info("�뿬�뻾吏� �럹�씠吏� �슂泥�");
		 
	}
	
//	@PostMapping("/details")
//	public void postReply(@RequestParam("contentId") String contentId) {
//		log.info("post상세페이지 댓글 목록");
//		List<DetailsReplyDTO> list =Reservice.read(contentId);
//		System.out.println(list);
//	}
//	
	// 댓글 목록 가져오기
	@GetMapping("/details")
	public void getReply(@RequestParam("contentId") String contentId, Model model) {
		log.info("get상세페이지 댓글 목록");
		List<DetailsReplyDTO> list =Reservice.read(contentId);
		System.out.println(list);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm");

		for (DetailsReplyDTO dto : list) {
		    String formattedDate = sdf.format(dto.getDereplyDate());
		    dto.setFormattedDate(formattedDate);
		    try {
		        Date parsedDate = sdf.parse(formattedDate);
		        dto.setDereplyDate(parsedDate);
		    } catch (ParseException e) {
		        e.printStackTrace();
		    }
		}
		
		model.addAttribute("replyList", list);
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
	


	@GetMapping("/festival")
	public void feslistGet() {
		log.info("festival");

	}

	@GetMapping("/fedetail")
	public void fedetailGet() {
		log.info("fedetail");

	}
	

}


