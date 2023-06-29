package com.spring.service;

import java.util.List;

import com.spring.domain.WishTestListDTO;

public interface WishlistTestService {
	public List<WishTestListDTO> getRow(String username);
	public boolean insert(WishTestListDTO dto);
	public boolean delete(String contentid);
}
