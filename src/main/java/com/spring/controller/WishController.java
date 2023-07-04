package com.spring.controller;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.spring.domain.WishListDTO;
import com.spring.service.WishService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/wish")
@Controller
@Slf4j
public class WishController {
	
	@Autowired
	private WishService service;
	
	@ResponseBody
	@PostMapping("/add")
	public String wishAddget(@RequestBody WishListDTO dto) {
		System.out.println("========Post wish Add========================================");
		dto.setUserid(dto.getUserid().replaceAll("\\s+", ""));
		System.out.println(dto.getUserid());
		log.info("찜목록추가,"+dto);
		String alert="";
		try {
			service.insert(dto);
				alert="true";
			
			System.out.println("alert1="+alert);
		} catch (Exception e) {
			alert="false";
		}
		System.out.println("alert2="+alert);
		return alert;
	}
	@PostMapping("/mywishlist")
	public void wishListPost(String username, Model model) {
		log.info("포스트매핑,아이디:"+ username);
		List<WishListDTO> list =service.getRow(username.replaceAll("\\s+", ""));
		model.addAttribute("wishList", list);
	}
	@GetMapping("/mywishlist")
	public void wishListGet(String username, Model model) {
		log.info("겟매핑, 아이디:"+ username);
		List<WishListDTO> list =service.getRow(username.replaceAll("\\s+", ""));
		model.addAttribute("wishList", list);
	}
	

	@GetMapping("/delete")
	public String wishDeleteget( String contentid, String username) {
		System.out.println("========Get wish delete========================================");
		System.out.println("contentid : "+contentid);
		System.out.println("username:"+username);
		
		
			service.delete(contentid,username.replaceAll("\\s+", ""));
			
		
		return "찜목록 제거완료";
	}
}
