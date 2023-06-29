package com.spring.mapper;

import java.util.List;

import com.spring.domain.WishTestListDTO;

public interface WishTestMapper {
	
	public int insert(WishTestListDTO dto);
	public int delete(String contentid);
	public List<WishTestListDTO> getRow(String username);
}
