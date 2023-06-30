package com.spring.mapper;

import java.util.List;

import com.spring.domain.WishListDTO;

public interface WishMapper {
	
	public int insert(WishListDTO dto);
	public int delete(String contentid);
	public List<WishListDTO> getRow(String userid);
}
