package com.spring.web;

import java.security.Principal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.spring.domain.ChatMessageDTO;
import com.spring.domain.ChatRoomDTO;

@Repository
public class ChatRoomRepository {

    private Map<String, ChatRoomDTO> chatRoomDTOMap;

    // 초기화 메서드 - jdk버전때문에 @PostConstruct 어노테이션 못씀
    private void init(){
        chatRoomDTOMap = new LinkedHashMap<>();
    }

    
    public List<ChatRoomDTO> findAllRooms() {
        List<ChatRoomDTO> result = new ArrayList<>(chatRoomDTOMap.values());
        //채팅방 생성 순서 최근 순으로 반환
        Collections.reverse(result);
             
        
        return result;
    }
    

    public ChatRoomDTO findRoomById(String id){
        return chatRoomDTOMap.get(id);
    }

    public ChatRoomDTO createChatRoomDTO(String name){
        ChatRoomDTO room = ChatRoomDTO.create(name);
        chatRoomDTOMap.put(room.getRoomId(), room);

        return room;
    }
    
    
    // 채팅방 전체 userlist 조회
    public ArrayList<String> getUserList(String roomId){
        ArrayList<String> list = new ArrayList<>();

        ChatRoomDTO room = chatRoomDTOMap.get(roomId);

        // hashmap 을 for 문을 돌린 후
        // value 값만 뽑아내서 list 에 저장 후 reutrn
        room.getUserlist().forEach((key, value) -> list.add(value));
        return list;
    }
    
    
}
