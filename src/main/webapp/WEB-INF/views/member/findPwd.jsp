<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../include/header2.jsp" %>
<head>
	<link rel="stylesheet" href="../resources/css/login.css" type="text/css"/>
</head>
	
	
<main> 	
<body>  	
  	
  <div id="login">

	<div class="center-text">
	  <h1><strong>비밀번호를 잊으셨나요?</strong></h1>
	  <h2> 가입 당시 입력하신 이메일로</h2>
	  <h2> 임시 비밀번호를 보내드립니다</h2>
  	</div>
  	
	  <br>

  <form method="post" action="/member/findPwd">

	<fieldset>

      <p><input type="text" required id="username" placeholder="아이디를 입력하세요" name="username"></p>

      
      <p><input type="submit" value="임시 비밀번호 발송"></p>

	</fieldset>

	  <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />

		    
		<!-- 알림 메시지 출력 부분, 성공/실패 메세지 --> 
		<div class="col">
		    <c:if test="${not empty successMessage}">
		        <div class="alert alert-success col-md-11 mb-3" role="alert">
		            <span>${successMessage}</span>
		        </div>
		    </c:if>
		</div>
		<div class="col">
			<c:if test="${not empty failMessage}">
				 <div class="alert alert-danger col-md-11 mb-3" role="alert">
				     <span>${failMessage}</span>
				 </div>
				 <div class="sign-up">
					계정이 없으신가요? <a href="/member/register"><strong>회원가입</strong></a>
				</div>
			</c:if>
         </div>


  </form>

  



</div>
  	
  	
  	
  	
</body>     
</main>



<%@ include file="../include/footer1.jsp" %>





