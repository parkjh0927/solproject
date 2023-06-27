<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../include/header2.jsp" %>


<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="../resources/css/register.css" type="text/css"/>

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
            
          <!-- 알림 메시지 출력 부분, failMessage가 존재할 때에만 출력 --> 
           <div class="col">
				<c:if test="${not empty failMessage}">
				    <div class="alert alert-danger col-md-8 mb-3" role="alert">
				        <span>${failMessage}</span>
				    </div>
				</c:if>
            </div>
                     
          
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  
          
			<div class="col">
           		<a href="/member/myPage" class="btn btn-info">취소하기</a>
           		<button type="button" class="btn btn-danger leaveBtn">탈퇴하기</button>
           </div>    							
			
        </form>
      </div>
    </div>
      </div>

	    
</body>
	
	

<script src="../resources/js/memRemove.js"></script>


<%@ include file="../include/footer1.jsp" %>






