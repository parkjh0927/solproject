<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../include/header2.jsp" %>
<head>
	<link rel="stylesheet" href="../resources/css/login.css" type="text/css"/>
</head>
	
	
<main> 	
<body>  	
  	
  <div id="login">

  <h1><strong>Welcome.</strong> Please login.</h1>

  <form method="post" action="/login">

    <fieldset>

      <p><input type="text" required id="username" placeholder="아이디" name="username"></p>

      <p><input type="password" required id="exampleInputPassword1" placeholder="비밀번호" name="password"></p>
            	

      <p><a href="/member/findPwd">비밀번호를 잊으셨나요?</a></p>

      <p><input type="submit" value="Login"></p>

    </fieldset>
    
    
    			<div>
			    	<span class="has-danger">${error}</span>
			    </div>
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
				
				<div class="sign-up">
					계정이 없으신가요? <a href="/member/register"><strong>회원가입</strong></a>
				</div>

  </form>

  <p><span class="btn-round">or</span></p>
  
   <div id="naver_id_login" style="text-align: center">
         <a href="${naverUrl }"><img width="223" 
         src="../resources/images/btnG.png" /></a>
 </div>
 
 <!-- 카카오 로그인 -->
<div class="col-lg-12 text-center mt-3">
   <a class="p-2" href="https://kauth.kakao.com/oauth/authorize?client_id=040ad7bc8137ca9e8bcc14ee58633e1c&redirect_uri=http://localhost:9091/member/kakaoLogin&response_type=code">
    <img alt="카카오로그인" src="../resources/images/common/kakao_login.png">
   </a>
</div>



</div>
  	
  	
  	
  	
</body>     
</main>



<%@ include file="../include/footer1.jsp" %>





