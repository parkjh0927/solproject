package com.spring.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.spring.domain.CriteriaDTO;
import com.spring.domain.DetailsReplyDTO;
import com.spring.domain.DetailsReplyPageDTO;

public interface ReplyService {
	
	public boolean reinsert(DetailsReplyDTO dto);
	public boolean reupdate(@Param("rno")int rno, @Param("dereply")String dereply);
	public boolean redelete(@Param("rno")int rno,@Param("username")String username);
	public List<DetailsReplyDTO> read(String contentid);
	public DetailsReplyPageDTO listAll(CriteriaDTO cri, String contentid);

}
