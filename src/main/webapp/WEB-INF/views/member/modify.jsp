<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../include/header2.jsp" %>


<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="stylesheet" href="../resources/css/register.css" type="text/css"/>


</head>
<style>
	.mb-3 > div{
		
	}
</style>
	

<body>
	 <div class="container">
	   <div class="input-form-backgroud row">
	    <div class="input-form col-md-12 mx-auto">
      
	    <form class="modifyForm" method="post" action="/member/modify" >
	       <div class="col">	        
	         <h4 class="mb-3 center">내 정보</h4>
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
		          <input type="password" class="form-control" id="password" name="password" value="${dto.password}" readonly>		                          	
	              </div>             	
			    		<div class="col-md-6">
			      			<a href="/member/changePwd" class="btn btn-danger">비밀번호 변경</a>
			    		</div>			    				    	
	            </div>
	            </div>
            
            
          
	          <div class="col-md-8 mb-3">
	            <label for="email">이메일</label>
	            <input type="email" class="form-control" id="email" name="email" value="${dto.email}" required>
		            <div class="invalid-feedback">
		              이메일을 확인해주세요.
		            </div>
	          </div>

	          <div class="col-md-12 mb-3">
	            <label for="postcode">우편번호<span class="text-muted">(선택사항)</span></label>
	            <div class="row">
		        <div class="col">
		        	<input type="text" class="form-control" id="postcode" name="postcode" value="${dto.postcode}">
		        </div>
		           <div class="col-md-7 mb-3">
			           <input type="button" onclick="exDaumPostcode()" value="우편번호 찾기">        
			       </div>
		        </div>
	          	</div>
          
	          <div class="col-md-8 mb-3">
	            <label for="address">주소<span class="text-muted">(선택사항)</span></label>
	            <input type="text" class="form-control" id="address" name="address" value="${dto.address}">
	          </div>
	
	          <div class="col-md-8 mb-3">
	            <label for="address2">상세주소<span class="text-muted">(선택사항)</span></label>
	            <input type="text" class="form-control" id="address2" name="address2" value="${dto.address2}">
	          </div>


          <br>
          
          
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                  
          <div class="col">           
			<button type="submit" class="btn btn-info">수정하기</button>
			<a href="/member/myPage" class="btn btn-primary">취소하기</a>
   		  </div>	
			
        </form>
      </div>
    </div>
    
  </div>
	    
</body>
	

<script src="../resources/js/memModify.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<%@ include file="../include/footer1.jsp" %>






