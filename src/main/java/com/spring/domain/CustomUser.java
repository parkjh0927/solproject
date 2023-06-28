package com.spring.domain;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.Getter;


@Getter
public class CustomUser extends User {	
	
	private MemberDTO dto;

	public CustomUser(String username, String password, Collection<? extends GrantedAuthority> authorities) {
		super(username, password, authorities);		
	}
	

	public CustomUser(MemberDTO dto) {
		super(dto.getUsername(), dto.getPassword(), dto.getAuthorities()
													 .stream()
													 .map(auth -> new SimpleGrantedAuthority(auth.getAuthority()))
													 .collect(Collectors.toList()));
		this.dto = dto;
	}
}
