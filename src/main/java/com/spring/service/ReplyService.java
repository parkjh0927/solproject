package com.spring.service;

import com.spring.domain.CriteriaDTO;
import com.spring.domain.DetailsReplyDTO;
import com.spring.domain.DetailsReplyPageDTO;

public interface ReplyService {
	
	public boolean reinsert(DetailsReplyDTO dto);
	public boolean reupdate(DetailsReplyDTO dto);
	public boolean redelete(int rno);
	public DetailsReplyDTO read(int rno);
	public DetailsReplyPageDTO listAll(CriteriaDTO cri, String contentid);

}
