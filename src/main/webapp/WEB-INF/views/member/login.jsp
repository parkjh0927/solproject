<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../include/header2.jsp" %>
<head>
	<link rel="stylesheet" href="../resources/css/login.css" type="text/css"/>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js" charset="utf-8"></script>
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
    
				
				<!-- 회원가입 성공 / 로그인 실패 메세지 -->
				<div class="col">
				    <c:if test="${not empty register}">
				        <div class="alert alert-success col-md-12 mb-3" role="alert">
				            <span>${register}</span>
				        </div>
				    </c:if>
				</div>
				<div class="col">
					<c:if test="${not empty error}">
						 <div class="alert alert-danger col-md-12 mb-3" role="alert">
						     <span>${error}</span>
						 </div>
					</c:if>
		         </div>
           
    			
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
				
				<div class="sign-up">
					계정이 없으신가요? <a href="/member/register"><strong>회원가입</strong></a>
				</div>

  </form>

  <p><span class="btn-round">or</span></p>
  
 
<!-- sns 로그인 -->
<div class="col-lg-12 text-center mt-3">
   <a class="p-2" href="https://kauth.kakao.com/oauth/authorize?client_id=040ad7bc8137ca9e8bcc14ee58633e1c&redirect_uri=http://localhost:8080/kakaoLogin&response_type=code">
    <img alt="카카오로그인" src="../resources/images/common/kakao_login.png">
   </a>
<div id="naverIdLogin"></div>
</div>

</div>


  	
  	
  	
  	
</body>     
</main>

<script type="text/javascript">
	var naverLogin = new naver.LoginWithNaverId(
		{
			clientId: "T5au66dpnNZuT0_5qsZR",
			callbackUrl: "http://localhost:8080/naverCallback",
			isPopup: false,
			loginButton: {color: "green", type: 3, height: 40}
		}
	);
naverLogin.init();
</script>
<%@ include file="../include/footer1.jsp" %>





