package com.spring.service;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.HashMap;

import org.springframework.stereotype.Service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Service
public class SnsLoginService {
	
	
	// 카카오 토큰
	public String getAccessToken(String authorize_code) {
		String access_Token = "";
		String refresh_Token = "";
		String reqURL = "https://kauth.kakao.com/oauth/token";

		try {
			URL url = new URL(reqURL);            
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
	
			//HttpURLConnection 설정 값 셋팅 - POST 요청을 위해 setDoOutput을 true로
			conn.setRequestMethod("POST");
			conn.setDoOutput(true);
			
			// POST 요청에 필요한 파라미터 - buffer 스트림으로 객체 값 셋팅 후 요청            
			BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(conn.getOutputStream()));
			StringBuilder sb = new StringBuilder();
			sb.append("grant_type=authorization_code");            
			sb.append("&client_id=040ad7bc8137ca9e8bcc14ee58633e1c"); // 본인이 발급받은 key
			sb.append("&redirect_uri=http://localhost:8080/kakaoLogin"); // 본인이 설정한 주소            
			sb.append("&code=" + authorize_code);
			bw.write(sb.toString());
			bw.flush();
            
			// 결과 코드가 200이라면 성공
			int responseCode = conn.getResponseCode();
			System.out.println("responseCode : " + responseCode);
            
			// 요청을 통해 얻은 JSON타입의 Response 메세지 읽어오기 - RETURN 값 result 변수에 저장
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
			String line = "";
			String result = "";
            
			while ((line = br.readLine()) != null) {
				result += line;
			}
			System.out.println("response body : " + result);
            
			// JSON 문자열 파싱
			JsonElement element = JsonParser.parseString(result);
            
			// 토큰 값 저장 및 리턴
			access_Token = element.getAsJsonObject().get("access_token").getAsString();
			refresh_Token = element.getAsJsonObject().get("refresh_token").getAsString();
            
			System.out.println("access_token : " + access_Token);
			System.out.println("refresh_token : " + refresh_Token);
            
			br.close();
			bw.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return access_Token;
	}


	// 카카오 사용자정보
	public HashMap<String, Object> getUserInfo(String access_Token) {
		// 요청하는 클라이언트마다 가진 정보가 다를 수 있기 때문에 HashMap타입으로 선언 - userInfo에 사용자 정보를 담음
		HashMap<String, Object> userInfo = new HashMap<>();
		String reqURL = "https://kapi.kakao.com/v2/user/me";
		try {
			// URL에 HTTP 연결
			URL url = new URL(reqURL);
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			conn.setRequestMethod("GET");

			// 요청에 필요한 Header에 포함될 내용
			conn.setRequestProperty("Authorization", "Bearer " + access_Token);

			int responseCode = conn.getResponseCode();
			System.out.println("responseCode : " + responseCode);

			// 연결 객체로부터 응답 데이터를 읽기 위해 BufferedReader를 생성
			BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

			// 응답 데이터를 줄 단위로 읽어와서 문자열로 합침
			String line = "";
			String result = "";

			while ((line = br.readLine()) != null) {
				result += line;
			}
			System.out.println("response body : " + result);

			// 응답 데이터를 JSON 형식으로 파싱
			JsonElement element = JsonParser.parseString(result);

			// 파싱된 JSON 데이터에서 닉네임과 이메일을 추출
			JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
			JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();
			String nickname = properties.getAsJsonObject().get("nickname").getAsString();
			String email = kakao_account.getAsJsonObject().get("email").getAsString();
			
			// 추출한 닉네임과 이메일을 userInfo 객체에 저장
			userInfo.put("nickname", nickname);
			userInfo.put("email", email);

		} catch (IOException e) {
			e.printStackTrace();
		}
		return userInfo;
	}


	
	

	

}
