package com.spring.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.spring.domain.DetailsReplyDTO;
import com.spring.service.ReplyService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/replies")
public class ReplyController {
	
	@Autowired
	private ReplyService service;

	@PostMapping("/new")
	public void insert(@RequestBody DetailsReplyDTO dto){
		log.info("댓글 삽입");
		service.reinsert(dto);
		System.out.println(dto);
	}
	@GetMapping("/delete")
	public ResponseEntity<String> delete(@RequestParam("rno") int rno, @RequestParam("username")String username) {
		System.out.println("댓글 삭제");
		System.out.println(username+"username");
		System.out.println("rno : "+rno);
		try {
			if(service.redelete(rno,username.replaceAll("\\s+", ""))) {;
				return new ResponseEntity<> ("true",HttpStatus.OK);
			}
			else 
				return new ResponseEntity<> ("false",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<> ("false",HttpStatus.OK);
		}
	}
	@GetMapping("/modify")
	public ResponseEntity<String> modify(@RequestParam("rno") int rno, @RequestParam("dereply")String dereply) {
		System.out.println("댓글 수정");
		System.out.println(rno+"rno");
		System.out.println("dereply : "+dereply);
		try {
			if(service.reupdate(rno,dereply)) {;
				return new ResponseEntity<> ("true",HttpStatus.OK);
			}
			else 
				return new ResponseEntity<> ("false",HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<> ("false",HttpStatus.OK);
		}
	}
	
	
	
}



