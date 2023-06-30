package com.spring.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.spring.domain.WishListDTO;

public interface WishMapper {
	
	public int insert(WishListDTO dto);
	public int delete(@Param("contentid") String contentid,@Param("username") String username);
	public List<WishListDTO> getRow(String userid);
}
