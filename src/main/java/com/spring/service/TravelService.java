package com.spring.service;



import java.util.List;

import com.spring.domain.SearchResDTO;
import com.spring.domain.WishListDTO;

public interface TravelService {
	public SearchResDTO search(String search);
	public boolean insert(WishListDTO dto);
	public boolean delete(String contentid);
	public List<WishListDTO> getRow(String username);

}
