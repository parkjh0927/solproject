package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.domain.WishListDTO;
import com.spring.mapper.WishMapper;


@Service
public class WishServiceImpl implements WishService {
	
	@Autowired
	private WishMapper mapper;
	
	@Override
	public List<WishListDTO> getRow(String username) {
		
		return mapper.getRow(username);
	}

	@Override
	public boolean insert(WishListDTO dto) {
		
		return mapper.insert(dto)==1?true:false;
	}

	@Override
	public boolean delete(String contentid,String username) {

		return mapper.delete(contentid, username)==1?true:false;
	}


}
