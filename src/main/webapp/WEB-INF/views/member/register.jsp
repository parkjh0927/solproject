<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="../include/header2.jsp" %>


<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"> 
<link rel="stylesheet" href="../resources/css/register.css" type="text/css"/>
	
<style>

	#username::placeholder, #password::placeholder, #confirmPassword::placeholder {
	  font-size: 12px; 
	}
    
    /* 중복아이디 검사 */
    .id_input_no{
    	color : red;
    	display : none;
    }
    .id_input_ok{
    	color : green;
    	display : none;
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
	
 <meta id="_csrf" name="_csrf" content="${_csrf.token}"/>
 <meta id="_csrf_header" name="_csrf_header" content="${_csrf.headerName}"/>
 
</head>
	          

<body>
	 <div class="container">
	   <div class="input-form-backgroud row">
	    <div class="input-form col-md-12 mx-auto">
      
	    <form class="validation-form registerForm" method="post" action="" >
	       <div class="col">	        
	         <h4 class="mb-3 center">회원가입</h4>
	       </div>
	        
	        <br>
          	
	        <div class="col-md-8 mb-3">
	           <label for="username">아이디</label>	            			  
		          <input type="text" class="form-control id_input" id="username" placeholder="알파벳 대소문자, 숫자로 이루어진 4~12자리" 
		          	name="username" required pattern="^[a-zA-Z0-9]{4,12}$">
		          <div class="invalid-feedback"></div>
		          <span class="id_input_no">이미 사용중인 아이디입니다.</span>			    				    	   				    		            
		          <span class="id_input_ok">사용 가능한 아이디입니다.</span>			    				    	   				    		            
	        </div>	            	        
 
                       
            <div class="col-md-8 mb-3">
              <label for="password">비밀번호</label>
	              <input type="password" class="form-control" id="password" placeholder="알파벳,숫자,특수문자가 하나 이상씩 포함된 5~12자리" 
	              	name="password" required pattern="^(?=.*[A-za-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{5,12}$">
	              <div class="invalid-feedback"></div>
            </div>
            
            <div class="col-md-8 mb-3">
              <label for="confirmPassword">비밀번호 확인</label>
	              <input type="password" class="form-control pwd_input" id="confirmPassword" placeholder="동일한 비밀번호를 입력해주세요" 
	              	name="confirmPassword" required pattern="^(?=.*[A-za-z])(?=.*\d)(?=.*[!@#$%])[A-Za-z\d!@#$%]{5,12}$">
	              <div class="invalid-feedback"></div>
	              <span class="confirmPW_no">비밀번호가 일치하지 않습니다.</span>
	              <span class="confirmPW_ok">비밀번호가 일치합니다.</span>
            </div>
          
          
	          <div class="col-md-8 mb-3">
	            <label for="email">이메일</label>
	            <input type="email" class="form-control" id="email" name="email" placeholder="you@gmail.com" required>
	            <div class="invalid-feedback"></div>
	          </div>

	          <div class="col-md-10 mb-3">
	            <label for="postcode">우편번호<span class="text-muted">(선택사항)</span></label>
	          <div class="row">
		           <div class="col">
		            	<input type="text" class="form-control" id="postcode" name="postcode" placeholder="우편번호">   
		           </div>
		           <div class="col">
			           <input type="button" onclick="exDaumPostcode()" value="우편번호 찾기">        
			       </div>
	          </div>
	          </div>
          
	          <div class="col-md-8 mb-3">
	            <label for="address">주소<span class="text-muted">(선택사항)</span></label>
	            <input type="text" class="form-control" id="address" name="address" placeholder="주소">           
	          </div>
	
	          <div class="col-md-8 mb-3">
	            <label for="address2">상세주소<span class="text-muted">(선택사항)</span></label>
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
          
          <br>
          
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


