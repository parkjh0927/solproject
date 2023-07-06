package com.spring.web;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {
	// 초기화
    @Bean(initMethod = "init")
    public ChatRoomRepository chatRoomRepository() {
        return new ChatRoomRepository();
    }

}