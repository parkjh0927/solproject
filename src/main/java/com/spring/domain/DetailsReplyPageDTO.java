package com.spring.domain;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@AllArgsConstructor
@NoArgsConstructor
public class DetailsReplyPageDTO {
	
	private int dereplyCnt;
	private List<DetailsReplyDTO> list;
}
