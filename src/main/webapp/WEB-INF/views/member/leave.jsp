<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../include/header2.jsp" %>


<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


<style>
	body {
      min-height: 100vh;

      background: -webkit-gradient(linear, left bottom, right top, from(#92b5db), to(#1d466c));
      background: -webkit-linear-gradient(bottom left, #92b5db 0%, #1d466c 100%);
      background: -moz-linear-gradient(bottom left, #92b5db 0%, #1d466c 100%);
      background: -o-linear-gradient(bottom left, #92b5db 0%, #1d466c 100%);
      background: linear-gradient(to top right, #92b5db 0%, #1d466c 100%);
      
      padding-top: 100px; /* 헤더의 높이만큼 메인 컨텐츠를 아래로 밀어줌 */
    }

    .input-form {
      max-width: 680px;

      margin-top: 80px;
      padding: 32px;

      background: #fff;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      border-radius: 10px;
      -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      -moz-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.15)
    }

</style>




</head>
	

<body>
	 <div class="container">
	   <div class="input-form-backgroud row">
	    <div class="input-form col-md-12 mx-auto">
      
	    <form class="leaveForm" method="post" action="/member/leave" >
	       <div class="col">	        
	         <h4 class="mb-3 center">회원탈퇴</h4>
	       </div>
	        
	        <br>
          	
	        <div class="col-md-8 mb-3">
	           <label for="username">아이디</label>	            			  
		       <input type="text" class="form-control" id="username" name="username" value="${dto.username}" readonly>
		    </div>	            
                                     
            <div class="col-md-8 mb-3">
	           <label for="checkPassword">비밀번호 확인</label>	           		  
		       <input type="password" class="form-control" id="checkPassword" name="checkPassword">
	        </div>
            
                     
          
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  
          
			<div class="col">
           		<a href="/member/myPage" class="btn btn-info">취소하기</a>
           		<button type="button" class="btn btn-danger">탈퇴하기</button>
           </div>    
							
			
        </form>
      </div>
    </div>
    
  </div>
	    
</body>
	

<script src="../resources/js/memRemove.js"></script>


<%@ include file="../include/footer1.jsp" %>






