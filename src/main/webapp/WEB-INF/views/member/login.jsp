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
      
      	<div class="checkbox mb-3">
				<label>
				    <input type="checkbox" name="remember-me"> Remember me
				</label>
		</div>

      <p><a href="#">Forgot Password?</a></p>

      <p><input type="submit" value="Login"></p>

    </fieldset>
    
    
    			<div>
			    	<span class="has-danger">${error}</span>
			    </div>
				<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
				
				<div class="sign-up">
					계정이 없으신가요? <a href="/member/register">회원가입</a>
				</div>

  </form>

  <p><span class="btn-round">or</span></p>
  
   <div id="naver_id_login" style="text-align: center">
         <a href="${naverUrl }"><img width="223" 
         src="../resources/images/btnG.png" /></a>
 </div>
 
 <div class="col-lg-12 text-center mt-3">
    <button class="btn btn-block waves-effect waves-light btn-rounded btn-outline-info mb-3">로그인하기</button>
    <img alt="카카오로그인" src="${pageContext.request.contextPath}/resources/assets/img/kakao_login_medium_wide.png" onclick="loginWithKakao()">
</div>



</div>
  	
  	
  	
  	
</body>     
</main>

<!-- 카카오 로그인 -->
<script type="text/javascript" src="https://developers.kakao.com/sdk/js/kakao.min.js" charset="utf-8"></script>
<script type="text/javascript">
    $(document).ready(function(){
        Kakao.init('d90216ec0aa34f3775074991e9c34f2b');
        Kakao.isInitialized();
    });

    function loginWithKakao() {
        Kakao.Auth.authorize({ 
        redirectUri: 'http://localhost:9091/kakao_callback' 
        }); // 등록한 리다이렉트uri 입력
    }
</script>	

<%@ include file="../include/footer1.jsp" %>





