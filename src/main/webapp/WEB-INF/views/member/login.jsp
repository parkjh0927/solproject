<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%@ include file="../include/header2.jsp" %>
<head>
	<link rel="stylesheet" href="../resources/css/login.css" type="text/css"/>
    <script type="text/javascript" src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js" charset="utf-8"></script>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
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
  
 
 <!-- 카카오 로그인 -->
<div class="col-lg-12 text-center mt-3">
   <a class="p-2" href="https://kauth.kakao.com/oauth/authorize?client_id=040ad7bc8137ca9e8bcc14ee58633e1c&redirect_uri=http://localhost:9091/kakaoLogin&response_type=code">
    <img alt="카카오로그인" src="../resources/images/common/kakao_login.png">
   </a>
<div id="naver_id_login"></div>
</div>

</div>



</div>
  	
  	
  	
  	
</body>     
</main>

<script type="text/javascript">
        var naver_id_login = new naver_id_login("T5au66dpnNZuT0_5qsZR", "http://localhost:9091/naverCallback");
        var state = naver_id_login.getUniqState();
        naver_id_login.setButton("green", 3,40);
        naver_id_login.setDomain("http://localhost:9091");
        naver_id_login.setState(state);
        naver_id_login.init_naver_id_login();
</script>
<%@ include file="../include/footer1.jsp" %>





