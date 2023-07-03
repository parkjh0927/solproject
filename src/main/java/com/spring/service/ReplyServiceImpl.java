package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.domain.CriteriaDTO;
import com.spring.domain.DetailsReplyDTO;
import com.spring.domain.DetailsReplyPageDTO;
import com.spring.mapper.DetailsReplyMapper;

@Service
public class ReplyServiceImpl implements ReplyService {

	@Autowired
	private DetailsReplyMapper detailsReplyMapper;
	
	@Override
	public boolean reinsert(DetailsReplyDTO dto) {
		return detailsReplyMapper.reinsert(dto) == 1 ? true : false;
	}

	@Override
	public boolean reupdate(DetailsReplyDTO dto) {
		// TODO Auto-generated method stub
		return detailsReplyMapper.reupdate(dto) == 1? true : false;
	}

	@Override
	public boolean redelete(int rno) {
		return detailsReplyMapper.redelete(rno) == 1 ? true : false;
	}

	@Override
	public DetailsReplyDTO read(int rno) {
		return detailsReplyMapper.read(rno);
	}

	@Override
	public DetailsReplyPageDTO listAll(CriteriaDTO cri, String contentid) {
		List<DetailsReplyDTO> list = detailsReplyMapper.listAll(cri, contentid);
		int replyCnt = detailsReplyMapper.getCountById(contentid);
		return new DetailsReplyPageDTO(replyCnt, list);
	}

}
