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
      
	    <form class="modifyForm" method="post" action="/member/modify" >
	       <div class="col">	        
	         <h4 class="mb-3 center">마이페이지</h4>
	       </div>
	        
	        <br>
          	
	        <div class="col-md-8 mb-3">
	           <label for="username">아이디</label>	            			  
		       <input type="text" class="form-control" id="username" name="username" value="${dto.username}" readonly>
		    </div>	            
               
                       
            <div class="col-md-10 mb-3">
	           <label for="password">비밀번호</label>
	           <div class="row">
    		   <div class="col">   			  
		          <input type="text" class="form-control" id="password" name="password" value="****" readonly>		                          	
	              </div>             	
			    		<div class="col-md-6">
			      			<button type="button" class="btn btn-danger">비밀번호 변경</button>
			    		</div>			    				    	
	            </div>
	            </div>
            
            
          
	          <div class="col-md-8 mb-3">
	            <label for="email">이메일</label>
	            <input type="email" class="form-control" id="email" name="email" value="${dto.email}">	            
	          </div>

	          <div class="col-md-8 mb-3">
	            <label for="postcode">우편번호</label>
		        <input type="text" class="form-control" id="postcode" name="postcode" value="${dto.postcode}">   		        
	          </div>
          
	          <div class="col-md-8 mb-3">
	            <label for="address">주소</label>
	            <input type="text" class="form-control" id="address" name="address" value="${dto.address}">           
	          </div>
	
	          <div class="col-md-8 mb-3">
	            <label for="address2">상세주소<span class="text-muted">(선택사항)</span></label>
	            <input type="text" class="form-control" id="address2" name="address2" value="${dto.address2}">
	          </div>


          <br>
          
          
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  
                    
			<button type="submit" class="btn btn-info">수정</button>
			<button type="button" class="btn btn-info">취소</button>
			<button type="button" class="btn btn-danger">탈퇴</button>
				
			<!-- <button type="button" class="btn btn-secondary">홈</button> -->
          
          <!-- <div class="col">
          	<button class="btn btn-primary btn-lg" type="submit">가입하기</button>
          </div> -->
        </form>
      </div>
    </div>
    
  </div>
	    
</body>
	


<script src="../resources/js/memModify.js"></script>

<%@ include file="../include/footer1.jsp" %>






