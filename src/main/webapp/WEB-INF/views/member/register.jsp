<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
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
	        
	       <form class="validation-form registerForm" novalidate method="post" action="" >
	        <div class="col">	        
	        	<h4 class="mb-3 center">회원가입</h4>
	        </div>
	        
	        <br>
          	
	           <div class="col-md-6 mb-3">
	              <label for="userid">아이디</label>
	           <div class="row">
    			  <div class="col">
    			  <!-- 알파벳 대소문자, 숫자로 이루어진 4~12자리 아이디 -->
		              <input type="text" class="form-control" id="userid" placeholder="아이디" name="userid" required
		              pattern="^[a-zA-Z0-9]{4,12}$">
		              <div class="invalid-feedback">
		                아이디를 확인해주세요.
		              </div>             	
	              </div>             	
			    		<div class="col-2">
			      			<button type="button" class="btn btn-danger">check</button>
			    		</div>			    				    	
	            </div>
	            </div>
	            
                       
            <div class="col-md-6 mb-3">
              <label for="password">비밀번호</label>
              <!-- 알파벳,숫자,특수문자가 하나이상씩 포함된 5~12자리 비밀번호 -->
	              <input type="text" class="form-control" id="password" placeholder="비밀번호" name="password" required
	              pattern="^(?=.*[A-za-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{5,12}$">
	              <div class="invalid-feedback">
	                비밀번호를 확인해주세요.
	              </div>
            </div>
          
	          <div class="col-md-6 mb-3">
	            <label for="email">이메일</label>
	            <input type="email" class="form-control" id="email" name="email" placeholder="you@example.com" required>
	            <div class="invalid-feedback">
	              이메일을 확인해주세요.
	            </div>
	          </div>

	          <div class="col-md-6 mb-3">
	            <label for="postcode">우편번호</label>
	          <div class="row">
		           <div class="col">
		            	<input type="text" class="form-control" id="postcode" name="postcode" placeholder="우편번호">   
		           </div>
		           <div class="col">
			           <input type="button" onclick="exDaumPostcode()" value="우편번호 찾기">        
			       </div>
	          </div>
	          </div>
          
	          <div class="col-md-6 mb-3">
	            <label for="address">주소</label>
	            <input type="text" class="form-control" id="address" name="address" placeholder="주소">           
	          </div>
	
	          <div class="col-md-6 mb-3">
	            <label for="address2">상세주소<span class="text-muted"></span></label>
	            <input type="text" class="form-control" id="address2" name="address2" placeholder="상세주소">
	          </div>



          <br>
          <div class="col">
          <hr class="mb-4">
	          <div class="col custom-control custom-checkbox">
	            <input type="checkbox" class="custom-control-input" id="agreement" required>
	            <label class="custom-control-label" for="agreement">개인정보 수집 및 이용에 동의합니다.</label>
	          </div>
          </div>
          
          <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
          
          <div class="col">
          	<button class="btn btn-primary btn-lg" type="submit">가입하기</button>
          </div>
        </form>
      </div>
    </div>
    
  </div>
	    
</body>
	


<script src="../resources/js/memRegister.js"></script>
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>

<%@ include file="../include/footer1.jsp" %>






