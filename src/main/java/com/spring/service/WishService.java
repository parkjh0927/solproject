package com.spring.service;

import java.util.List;

import com.spring.domain.WishListDTO;

public interface WishService {
	public List<WishListDTO> getRow(String username);
	public boolean insert(WishListDTO dto);
	public boolean delete(String contentid,String username);
}
