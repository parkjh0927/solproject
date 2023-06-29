package com.spring.api;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.spring.domain.SearchItemsDTO;
import com.spring.domain.SearchResDTO;


@Component
public class TourClient {
	
	
	
	
	
	public SearchResDTO tourReq(String search) {
		
		//서비스 키 (디코딩 상태)
		String serviceKey = "d/V+XJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU/STHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw==";
		//api 기본 주
		String url = "https://apis.data.go.kr/B551011/KorService1/searchKeyword1";
		url+= "?numOfRows=1000&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&";
		//받을 키워드와 디코딩상태인 서비스 키 인코딩작업 
		try {
			url += "keyword="+URLEncoder.encode(search, StandardCharsets.UTF_8.toString());
		
			url += "&serviceKey="+URLEncoder.encode(serviceKey, StandardCharsets.UTF_8.toString());
		} catch (UnsupportedEncodingException e2) {
			// TODO Auto-generated catch block
			e2.printStackTrace();
		}
		
		URI uri=null;
		try {
			uri = new URI(url);
		} catch (URISyntaxException e) {
			e.printStackTrace();
		}

		

		
		//최종 응답 객체 
		SearchResDTO res = new SearchResDTO();
		

		// 헤더 추가

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_JSON);
		HttpEntity<HttpHeaders> httpEntity = new HttpEntity<>(headers);
        ResponseEntity<String> resEntity = new RestTemplate().exchange(uri, HttpMethod.GET, httpEntity, String.class);
		JSONParser jsonParser = new JSONParser();
		JSONObject jsonObject = null;
		

		try {

			jsonObject = (JSONObject) jsonParser.parse(resEntity.getBody());

		} catch (ParseException e) {

			e.printStackTrace();

		}

		

		
		//json 경로 
		JSONObject response = (JSONObject) jsonObject.get("response");
		JSONObject body = (JSONObject) response.get("body");
		
		JSONObject items = (JSONObject) body.get("items");
		
		JSONArray item = (JSONArray) items.get("item");

		
		
		//원하는 정보 불러오기 
		for (Object object : item) {
		    JSONObject jsonObj = (JSONObject) object;			
		    String addr1 = (String) jsonObj.get("addr1");
		    String contentid = (String) jsonObj.get("contentid");
		    String contenttypeid = (String) jsonObj.get("contenttypeid");
		    String firstimage2 = (String) jsonObj.get("firstimage2");
		    String tel = (String) jsonObj.get("tel");
		    String title = (String) jsonObj.get("title");
		    
		    if (firstimage2 == null || firstimage2.isEmpty()) {
		        // 이미지가 비어 있는 경우 대체 이미지 경로 설정
		        firstimage2 = "../resources/img/prepare.png";
		    }
		    //가져올 것들 담기 
		    SearchItemsDTO itemsdto = new SearchItemsDTO(addr1, contentid, contenttypeid, firstimage2, tel, title);
		    res.getItem().add(itemsdto);
		}


		
		return res;
		
	}

}
