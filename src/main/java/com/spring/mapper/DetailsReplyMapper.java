package com.spring.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.spring.domain.CriteriaDTO;
import com.spring.domain.DetailsReplyDTO;

public interface DetailsReplyMapper {
	
	public int reinsert(DetailsReplyDTO dto);
	public int reupdate(DetailsReplyDTO dto);
	public int redelete(int rno);
	public DetailsReplyDTO read(int rno);
	public List<DetailsReplyDTO> listAll(@Param("cri") CriteriaDTO cri, @Param("contentid") String contentid);
	public int getCountById(String contentid);
}
