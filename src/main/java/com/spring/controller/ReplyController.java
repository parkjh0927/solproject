package com.spring.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.domain.CriteriaDTO;
import com.spring.domain.DetailsReplyDTO;
import com.spring.domain.DetailsReplyPageDTO;
import com.spring.service.ReplyService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping("/replies")
public class ReplyController {

	private ReplyService replyService;
	
	@GetMapping(value = "/{rno}",produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<DetailsReplyDTO> get(@PathVariable("rno") int rno){
		log.info("댓글 조회");
		return new ResponseEntity<DetailsReplyDTO>(replyService.read(rno), HttpStatus.OK);
	}
	
	@PostMapping("/new")
	@PreAuthorize("isAuthenticated()")
	public ResponseEntity<String> insert(@RequestBody DetailsReplyDTO dto){
		log.info("댓글 삽입");
		
		return replyService.reinsert(dto)?
				new ResponseEntity<String>("성공", HttpStatus.OK):
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	@GetMapping("/page/{contentid}/{page}")
	public ResponseEntity<DetailsReplyPageDTO> select(@PathVariable("contentid") String contentid, @PathVariable("page") int page){
		log.info("댓글 조회"+contentid);
		
		CriteriaDTO cri = new CriteriaDTO(page, 10);
		
		return new ResponseEntity<DetailsReplyPageDTO>(replyService.listAll(cri, contentid),HttpStatus.OK);
	}
	
	@PutMapping("/{rno}")
	@PreAuthorize("principal.username == #dto.username")
	public ResponseEntity<String> update(@RequestBody DetailsReplyDTO dto){
		log.info("댓글 수정"+dto);
		
		return replyService.reupdate(dto)?
				new ResponseEntity<String>("성공", HttpStatus.OK):
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	public ResponseEntity<String> delete(@PathVariable("rno") int rno, @RequestBody DetailsReplyDTO dto){
		log.info("댓글 삭제"+rno);
		
		return replyService.redelete(rno)?
				new ResponseEntity<String>("성공",HttpStatus.OK):
					new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	
}



