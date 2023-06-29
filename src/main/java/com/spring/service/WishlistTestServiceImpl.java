package com.spring.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.domain.WishTestListDTO;
import com.spring.mapper.WishTestMapper;
@Service
public class WishlistTestServiceImpl implements WishlistTestService {
	
	@Autowired
	private WishTestMapper mapper;
	
	@Override
	public List<WishTestListDTO> getRow(String username) {
		
		return mapper.getRow(username);
	}

	@Override
	public boolean insert(WishTestListDTO dto) {
		
		return mapper.insert(dto)==1?true:false;
	}

	@Override
	public boolean delete(String contentid) {
		// TODO Auto-generated method stub
		return false;
	}

}
