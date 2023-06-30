package com.spring.api;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import com.spring.domain.SearchItemsDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchTourRes {
	//경로 클래스로 잡기 
	private Response response;
	
	@Data
	@AllArgsConstructor
	@NoArgsConstructor
	public class Response{
		
		private Body body;
		
		@Data
		@AllArgsConstructor
		@NoArgsConstructor
		public class Body{
			private int numOfRows;
			
			
			@Data
			@AllArgsConstructor
			@NoArgsConstructor
			public class Items{
				private List<SearchItemsDTO> item;
			}
		}
	}
}
