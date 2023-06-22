package com.spring.domain;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FestivalDTO {
    private String festivalId;
    private String imageUrl;
    private String altText;
    private String category;
    private String name;
    private String date;
    private String location;
    private boolean loadMore; // "더보기" 아이템 여부를 나타내는 필드

}
