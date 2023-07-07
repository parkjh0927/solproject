<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../include/header2.jsp" %>


<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
<link rel="stylesheet" href="../resources/css/register.css" type="text/css"/>
	
<style>

	.form-control::placeholder {
	  font-size: 12px; 
	}
       
    
    /* 비밀번호 확인 */
    .confirmPW_no{
    	color : red;
    	display : none;
    }
    .confirmPW_ok{
    	color : green;
    	display : none;
    }

</style>	
	
	
</head>
	

<body>
	 <div class="container">
	   <div class="input-form-backgroud row">
	    <div class="input-form col-md-12 mx-auto">
      
	    <form class="validation-form changePwdForm" method="post" action="/member/changePwd" >
	       <div class="col">	        
	         <h4 class="mb-3 center">비밀번호 변경</h4>
	       </div>
	        
	        <br>
          	
	        <div class="col-md-8 mb-3">
	           <label for="username">아이디</label>	            			  
		       <input type="text" class="form-control" id="username" name="username" value="${dto.username}" readonly>
		    </div>	            	        
 
                       
            <div class="col-md-8 mb-3">
              <label for="currentPassword">기존 비밀번호</label>
	              <input type="password" class="form-control" id="currentPassword" placeholder="기존 비밀번호를 입력해주세요" 
	              	name="currentPassword" required>
	              <div class="invalid-feedback"></div>
            </div>
            
            <div class="col-md-8 mb-3">
              <label for="newPassword">새 비밀번호</label>
	              <input type="password" class="form-control" id="newPassword" placeholder="알파벳,숫자,특수문자가 하나이상씩 포함된 5~12자리" 
	              	name="newPassword" required pattern="^(?=.*[A-za-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{5,12}$">
	              <div class="invalid-feedback"></div>
            </div>
            
            <div class="col-md-8 mb-3">
              <label for="confirmPassword">새 비밀번호 확인</label>
	              <input type="password" class="form-control pwd_input" id="confirmPassword" placeholder="동일한 비밀번호를 입력해주세요" 
	              	name="confirmPassword" required pattern="^(?=.*[A-za-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{5,12}$">
	              <div class="invalid-feedback"></div>
	              <span class="confirmPW_no">비밀번호가 일치하지 않습니다.</span>
	              <span class="confirmPW_ok">비밀번호가 일치합니다.</span>
            </div>
          
          
          <div class="col">
             <!-- 알림 메시지 출력 부분, failMessage가 존재할 때에만 출력 --> 
				<c:if test="${not empty failMessage}">
				    <div class="alert alert-danger col-md-8 mb-3" role="alert">
				        <span>${failMessage}</span>
				    </div>
				</c:if>
            </div>
	          
          
          <br>
          
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  
          
          <div class="col">
          	<button class="btn btn-info" type="submit">변경하기</button>
          	<a href="/member/myPage" class="btn btn-primary">취소하기</a>
          </div>
        </form>
      </div>
    </div>
    
  </div>
	    
</body>

	

<script src="../resources/js/memChPwd.js"></script>


<%@ include file="../include/footer1.jsp" %>





