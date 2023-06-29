package com.spring.controller;

import java.util.List;
import java.util.Map;



import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.slf4j.Slf4j;

@Controller @RequestMapping("/travel") @Slf4j
public class MapController {
	

	@GetMapping("/map")
	public void mapGet() {
		log.info("map요청");
		
	}
	// 검색 시 지도 좌표 json 파일에 저장
//	@PostMapping("/map/search")
//	public ResponseEntity<String> mapSearchGet(@RequestBody List<Map<String, String>> items) {
//	    log.info("map검색 요청");
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
//	        log.error("파일 저장 중 오류 발생", e);
//	        return new ResponseEntity<>("fail", HttpStatus.INTERNAL_SERVER_ERROR);
//	    }
//	}
	@PostMapping("/map/search")
	public ResponseEntity<String> mapSearchGet(@RequestBody List<Map<String, Object>> items) {
	    log.info("map검색 요청");

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
	
	@GetMapping("/tetetet")
	public void getttt() {
		log.info("ddd");
	}

}
