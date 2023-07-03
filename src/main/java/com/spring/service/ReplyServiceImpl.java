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
	public boolean reupdate(int rno, String dereply) {
		// TODO Auto-generated method stub
		return detailsReplyMapper.reupdate(rno,dereply) == 1? true : false;
	}

	@Override
	public boolean redelete(int rno, String username) {
		return detailsReplyMapper.redelete(rno,username) == 1 ? true : false;
	}

	@Override
	public List<DetailsReplyDTO> read(String contentid) {
		return detailsReplyMapper.read(contentid);
	}

	@Override
	public DetailsReplyPageDTO listAll(CriteriaDTO cri, String contentid) {
		List<DetailsReplyDTO> list = detailsReplyMapper.listAll(cri, contentid);
		int replyCnt = detailsReplyMapper.getCountById(contentid);
		return new DetailsReplyPageDTO(replyCnt, list);
	}

}
