package com.spring.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.mapper.TravelMapper;

@Service
public class TravelServiceImpl implements TravelService {
	
	@Autowired
	private TravelMapper mapper;

}
