package com.spring.controller;

import java.util.List;
import java.util.Map;



import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.spring.domain.WishListDTO;
import com.spring.service.WishService;

import lombok.extern.slf4j.Slf4j;

@Controller @RequestMapping("/travel") @Slf4j
public class MapController {
	
	@Autowired
	private WishService service;
	
	@GetMapping("/map")
	public void mapGet() {
		log.info("map��û");
		
	}
	@GetMapping("/like")
	public ResponseEntity<List<WishListDTO>> wishGet(String username) {
	    System.out.println("유저아이디: " + username);
	    List<WishListDTO> list = service.getRow(username.replaceAll("\\s+", ""));
	    return ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(list);
	}
	@PostMapping("/map/search")
	public ResponseEntity<String> mapSearchGet(@RequestBody List<Map<String, Object>> items) {
	    log.info("map�˻� ��û");

	    JSONArray positions = new JSONArray();
	    for (Map<String, Object> item : items) {
	        double contentid = Double.parseDouble(item.get("contentid").toString());
	        double contenttypeid = Double.parseDouble(item.get("contenttypeid").toString());
	        double lat = Double.parseDouble(item.get("mapy").toString());
	        double lng = Double.parseDouble(item.get("mapx").toString());
	        JSONObject position = new JSONObject();
	        position.put("lat", lat);
	        position.put("lng", lng);
	        position.put("contentid", contentid);
	        position.put("contenttypeid", contenttypeid);
	        positions.put(position);
	    }

	    JSONObject json = new JSONObject();
	    json.put("positions", positions);

	    return ResponseEntity.ok().body(json.toString());
	}
	//찜목록 가져오기
//	@GetMapping("/like")
//	public ResponseEntity<String> wishGet(String username,Model model) {
//		System.out.println("유저아이디 : "+username);
//		List<WishListDTO> list =service.getRow(username.replaceAll("\\s+", ""));
//		System.out.println(list);
//		model.addAttribute("wishList", list);
//		String wishList=""+list.toString();
//		return new ResponseEntity<>(wishList,HttpStatus.OK);
//	}
	
	// �˻� �� ���� ��ǥ json ���Ͽ� ����
//	@PostMapping("/map/search")
//	public ResponseEntity<String> mapSearchGet(@RequestBody List<Map<String, String>> items) {
//	    log.info("map�˻� ��û");
//
//	    JSONArray positions = new JSONArray();
//	    for (Map<String, String> item : items) {
//	        double contentid = Double.parseDouble(item.get("contentid"));
//	        double contenttypeid = Double.parseDouble(item.get("contenttypeid"));
//	        double lat = Double.parseDouble(item.get("mapy"));
//	        double lng = Double.parseDouble(item.get("mapx"));
//	        JSONObject position = new JSONObject();
//	        position.put("lat", lat);
//	        position.put("lng", lng);
//	        position.put("contentid", contentid);
//	        position.put("contenttypeid", contenttypeid);
//	        positions.put(position);
//	    }
//
//	    JSONObject json = new JSONObject();
//	    json.put("positions", positions);
//
//	    try {
//	        String filePath = servletContext.getRealPath("/resources/js/json.json");
//	        //String filePath = "src/main/webapp/resources/js/json.json";
//
//	        File file = new File(filePath);
//	        FileOutputStream fos = new FileOutputStream(file);
//	        BufferedWriter writer = new BufferedWriter(new OutputStreamWriter(fos));
//
//	        writer.write(json.toString());
//
//	        writer.close();
//	        fos.close();
//
//	        return new ResponseEntity<>("success", HttpStatus.OK);
//	    } catch (Exception e) {
//	        log.error("���� ���� �� ���� �߻�", e);
//	        return new ResponseEntity<>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//	}
	
}
