package com.spring.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor @NoArgsConstructor
public class ChatMessageDTO {

    private String roomId;
    private String writer;
    private String message;
}