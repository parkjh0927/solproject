package com.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.spring.service.TravelService;

import lombok.extern.slf4j.Slf4j;

@RequestMapping("/board")
@Controller
@Slf4j
public class BoardController {

	@Autowired
	private BoardService service;

	@GetMapping("/list")
	public void boardlistGet(Model model, @ModelAttribute("cri") Criteria cri) {
		log.info("�Խ���/��������");

		List<BoardDTO> list = service.getList(cri);
		int total = service.getTotalCnt(cri);
		
		model.addAttribute("list", list); model.addAttribute("pageDTO", new
		PageDTO(cri, total));
		 

	}

	@GetMapping("/register")
	public void registerGet() {
		log.info("�Խ���/���");
	}

	@PostMapping("/register")
	public String registerPost(BoardDTO dto, RedirectAttributes rttr, Criteria cri) {
		boolean insertFlag=service.insert(dto);
	      if(insertFlag) {
	         log.info("�� ��ȣ: "+dto.getBno()); // �Խñ��� �ۼ��� ������ �α׿� �� ��ȣ�� ��µȴ�.
	         rttr.addFlashAttribute("result", dto.getBno()); // addFlashAttribute: �ּ��ٿ� �ѱ��� �ʰ� session�� ��� ��Ƶδ� ���
	         
	         // ������ ������ ���� �ּ��ٿ� ���� ������
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
}
