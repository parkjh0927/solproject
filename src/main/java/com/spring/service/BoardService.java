package com.spring.service;

import java.util.List;

import com.spring.domain.BoardDTO;
import com.spring.domain.Criteria;

public interface BoardService {
	//�쟾泥� 由ъ뒪�듃 媛��졇�삤湲�
	public List<BoardDTO> getList(Criteria cri);
	//湲��벑濡�
	public boolean insert(BoardDTO dto);
	//�듅�젙 寃뚯떆湲� 議고쉶
	public BoardDTO getRow(int bno);
	//湲��닔�젙
	public boolean update(BoardDTO dto);
	//湲��궘�젣
	public boolean delete(int bno);
	//�쟾泥� 寃뚯떆臾� 媛쒖닔
	public int getTotalCnt(Criteria cri);	

}
