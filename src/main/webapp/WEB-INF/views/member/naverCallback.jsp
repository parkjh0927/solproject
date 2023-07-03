<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">	

 	<meta id="_csrf" name="_csrf" content="${_csrf.token}"/>
 	<meta id="_csrf_header" name="_csrf_header" content="${_csrf.headerName}"/> 
 	<title>Insert title here</title>	
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
	
</head>
<body>

<script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>

<script>

	// csrf 토큰 첨부
	var token = $("meta[name='_csrf']").attr("content");
	var header = $("meta[name='_csrf_header']").attr("content");

	// 네이버 로그인 설정
	var naverLogin = new naver.LoginWithNaverId({
		clientId: "T5au66dpnNZuT0_5qsZR", 
		callbackUrl: "http://localhost:8080/naverCallback", 
		isPopup: false,
		callbackHandle: true
	});
	
	naverLogin.init();
	
	window.addEventListener('load', function () {
		// 네이버 로그인 상태를 확인하는 함수 
		naverLogin.getLoginStatus(function (status) {
		// 로그인 상태가 확인되면 실행
		if (status) {
			console.log("네이버 유저"+naverLogin.user);
			var email = naverLogin.user.getEmail();
			
			// AJAX 요청을 통해 서버로 네이버이메일 데이터 전송
			$.ajax({
				type: 'post',
				url: 'naverSave',
				data: {'n_email':email},			
				dataType: 'text',
				beforeSend: function (xhr) {
				      // 토큰 전송
				      xhr.setRequestHeader(header, token);
				    },
				success: function(result) {
					if (result == 'ok') {
						console.log("네이버 로그인 성공")
						location.replace("http://localhost:8080/") 
					} else {
			            console.log("네이버 로그인 실패");
			            location.replace("http://localhost:8080/member/login")
			        }
				},
				error: function(result) {
					console.log("오류 발생")
				}
			})
		// 로그인 실패시
		} else {
			console.log("네이버 로그인 실패");
			location.replace("http://localhost:8080/member/login")
		}
		});
	});
</script>
</body>
</html>