<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../include/header2.jsp"%>


<html>
<style>
    /* 전체 스타일 */
    body {
      font-family: Arial, sans-serif;
      background-color: #f2f2f2;
      margin: 0;
      padding: 0;
    }

    /* 헤더 스타일 */
    header {
      padding: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    /* 메인 스타일 */
    main {
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    /* 여행지 스타일 */
    .destination {
      margin-bottom: 20px;
      padding-bottom: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .destination img {
      /* width: 40%; */
      border-radius: 5px;
      margin-right: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 50px;
      margin-bottom: 20px;
      
      
    }

    .destination-content {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .destination h2 {
      color: #008080;
      font-size: 24px;
      margin: 0;
    }

    .destination p {
      color: #666666;
      margin: 8px 0;
    }

    .top {
      margin-top: 50px;
      font-size: 50px;
      display: flex;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
    }

  
	li {
    list-style: none;
}
	ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
	.wrap_contView .area_txtView ul li {
    float: left;
    width: 50%;
    padding: 3px 0 6px 0;
    display: table;
    font-size: 15px;
    font-weight: 400;
    background: none !important;
}
	.wrap_contView .area_txtView ul li strong {
    float: none;
    margin-right: 0;
    position: relative;
    display: table-cell;
    width: 128px;
    padding: 0 0 0 12px;
    font-weight: 700;
    color: #333;
}
	.wrap_contView .area_txtView ul li strong {
    float: none;
    margin-right: 0;
    position: relative;
    display: table-cell;
    width: 128px;
    padding: 0 0 0 12px;
    font-weight: 700;
    color: #333;
}
	.wrap_contView .area_txtView .inr ul li > strong {
    float: left;
    width: 26%;
    margin-right: 4%;
    font-size: 15px;
    color: #333;
    font-weight: normal;
}
	.wrap_contView .area_txtView ul li span {
    float: none;
    width: auto;
    display: table-cell;
    color: #666;
    padding-right: 20px;
    line-height: 1.4;
}
	.wrap_contView .area_txtView .inr ul li > span {
    float: left;
    width: 70%;
    font-size: 15px;
    color: #333;
    line-height: 26px;
}
	.wish{
	margin: 150px 0px 0px 1100px; 
	font-size: 20px;
	}
	
  </style>
<head>
</head>
<body>
    
         <div class="wish">
    			<button type="button"><security:authorize access="isAuthenticated()">찜 추가 하기</security:authorize></button>
    		</div>
	
      
  <main class="main">   
    <form action="/travel/details">
    <div class="information">
    	<div class="commons">
    		
	      <div class="destination">
	        <img src="seoul.jpg">
	                   
	      </div>
	
	      <div class="destination">
	        
	        <div class="destination-content">
	          <h2>상세정보 </h2>
	          
	        </div>
	      </div>  
    
	      <div class="destination">
	        
	        <div class="destination-content">
	         
	          <p>상세정보 내용 </p>
	                 
	        </div>   
	      </div>      
    	</div>  
      <div class="destination">
        
        <div class="destination-content">
	        <div class="wrap_contView" id="detailinfoview">
				<div class="area_txtView bottom">
					<div class="inr_wrap">  
						<div class="inr">
							<ul>
								
							</ul>
							<ul>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
        </div>
      </div>      
    </div>    
    </form>         
    
    <!-- 찜목록(위시리스트)에 담을 내용 -->
   <form method='get' id='wishForm' action ='http://localhost:8080/wish/add'>
   <input hidden id='csrfToken' name="${_csrf.parameterName}" value="${_csrf.token}" />
    <input hidden id='logintest' name='userid' value='
    <security:authorize access="isAuthenticated()">
    	<security:authentication property="principal.username"/>
	</security:authorize>'/>
	<div id='wishAdd'></div>
  </form>
  
    
  </main>
</body>

</html>
<script>
	const path = '<c:url value="/travel/mywishlist"/>';
</script>
<%@include file="../include/footer1.jsp"%>
<script src="/resources/js/details.js"></script>