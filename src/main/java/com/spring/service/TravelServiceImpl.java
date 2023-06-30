package com.spring.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.spring.api.TourClient;
import com.spring.domain.SearchResDTO;
import com.spring.domain.WishListDTO;
import com.spring.mapper.WishMapper;

@Service
public class TravelServiceImpl implements TravelService {
	
	@Autowired
	private TourClient tourClient;
	
	@Autowired
	private WishMapper wishmapper;
	
	@Override
	public SearchResDTO search(String search) {
		
	
		SearchResDTO dto = tourClient.tourReq(search);
		
		return dto;
	}

	@Override
	public boolean insert(WishListDTO dto) {
		return wishmapper.insert(dto) == 1? true : false;
	}

	@Override
	public boolean delete(String contentid) {
		return wishmapper.delete(contentid,contentid) == 1 ? true : false;
	}

	@Override
	public List<WishListDTO> getRow(String username) {
		return wishmapper.getRow(username);
	}

	

	

}
