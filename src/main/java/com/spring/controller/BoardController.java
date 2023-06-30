package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.spring.domain.BoardDTO;
import com.spring.domain.Criteria;
import com.spring.domain.PageDTO;
import com.spring.service.BoardService;


import lombok.extern.slf4j.Slf4j;

@RequestMapping("/board")
@Controller
@Slf4j
public class BoardController {

	@Autowired
	private BoardService service;

	@GetMapping("/list")
	public void boardlistGet(Model model, @ModelAttribute("cri") Criteria cri) {
		log.info("게시판/공지사항");

		List<BoardDTO> list = service.getList(cri);
		int total = service.getTotalCnt(cri);
		
		model.addAttribute("list", list); model.addAttribute("pageDTO", new
		PageDTO(cri, total));
		 

	}

	@PreAuthorize("isAuthenticated()")
	@GetMapping("/register")
	public void registerGet() {
		log.info("게시판/등록");
	}

	@PostMapping("/register")
	public String registerPost(BoardDTO dto, RedirectAttributes rttr, Criteria cri) {
		boolean insertFlag=service.insert(dto);
	      if(insertFlag) {
	         log.info("글 번호: "+dto.getBno()); // 게시글을 작성할 때마다 로그에 글 번호가 출력된다.
	         rttr.addFlashAttribute("result", dto.getBno()); // addFlashAttribute: 주소줄에 넘기지 않고 session에 잠시 담아두는 방식
	         
	         // 페이지 나누기 정보 주소줄에 같이 보내기
	         rttr.addAttribute("page", cri.getPage());
	         rttr.addAttribute("amount", cri.getAmount());
	         
	         return "redirect:/board/list";
	      }
		return "redirect:/board/register";
	}

	
	
	@GetMapping({"/read","/modify"})
	public void readGet(int bno,Model model,@ModelAttribute("cri") Criteria cri){
		log.info(""+bno);
		
		BoardDTO dto = service.getRow(bno);
		model.addAttribute("dto", dto);		
	}
	
	@PostMapping("/modify")
	@PreAuthorize("principal.username == #dto.writer") 
	public String modifyPost(BoardDTO dto,RedirectAttributes rttr,Criteria cri) {
		log.info(""+cri);

		service.update(dto);
		
		rttr.addFlashAttribute("result");
		
		rttr.addAttribute("page", cri.getPage());
		rttr.addAttribute("amount", cri.getAmount());

		rttr.addAttribute("type", cri.getType());
		rttr.addAttribute("keyword", cri.getKeyword());
		return "redirect:/board/list";		
	}
	
	
	@GetMapping("/remove")
	@PreAuthorize("principal.username == #writer")
	public String removeGet(int bno,String writer,RedirectAttributes rttr,Criteria cri) {
		
		service.delete(bno);
		
		rttr.addFlashAttribute("result", "");

		rttr.addAttribute("page", cri.getPage());
		rttr.addAttribute("amount", cri.getAmount());
		rttr.addAttribute("type", cri.getType());
		rttr.addAttribute("keyword", cri.getKeyword());
		
		return "redirect:/board/list";		
	}
	
}
