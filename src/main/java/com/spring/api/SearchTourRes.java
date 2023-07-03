package com.spring.api;

import java.util.List;

import com.spring.domain.SearchItemsDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchTourRes {

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
