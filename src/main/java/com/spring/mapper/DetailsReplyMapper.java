package com.spring.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.spring.domain.CriteriaDTO;
import com.spring.domain.DetailsReplyDTO;

public interface DetailsReplyMapper {
	
	public int reinsert(DetailsReplyDTO dto);
	public int reupdate(@Param("rno")int rno, @Param("dereply")String dereply);
	public int redelete(@Param("rno") int rno,@Param("username")String username);
	public List<DetailsReplyDTO> read(String contentid);
	public List<DetailsReplyDTO> listAll(@Param("cri") CriteriaDTO cri, @Param("contentid") String contentid);
	public int getCountById(String contentid);
}
