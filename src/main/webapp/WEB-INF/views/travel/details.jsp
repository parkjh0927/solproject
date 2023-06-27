<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../include/header2.jsp"%>

<html>
<head>
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
      margin-top: 150px;
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
	
	
  </style>
</head>
<body>
         
      
  <main class="main">   
             
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
								<li><strong>주소</strong><span>강원 양양군 현북면 잔교리</span></li>
							</ul>
							<ul>
								<li><strong>문의 및 안내</strong><span class="mo">해파랑길 종합 안내소 051-607-6395</li>
								<li><strong>홈페이지</strong><span><a href="https://www.durunubi.kr/course-detail-view.do?crs_idx=T_CRS_MNG0000004211" target="_blank" title="새창 : 해파랑길 42코스 홈페이지로 이동">https://www.durunubi.kr/main.do</a></span></li>
								<li><strong>이용시간</strong><span>상시이용 가능, 방문 전 통제구간 확인 요망</span></li>
								<li><strong>휴일</strong><span>연중무휴</span></li>
								<li><strong>주차</strong><span>있음 (약 소형 100대, 대형5대 주차가능)</span></li>
								<li><strong>체험프로그램</strong><span>트레킹</span></li>
								<li><strong>장애인 주차 안내</strong><span>장애인 주차장 있음_무장애 편의시설</span></li>
								<li><strong>접근로</strong><span>출입구까지 턱이 없어 휠체어 접근 가능함</span></li>
								<li><strong>출입통로</strong><span>주출입구는 턱이 없어 휠체어 접근 가능함</span></li>
								<li><strong>화장실</strong><span>장애인 화장실 있음</span></li>
								<li><strong>보조견동반</strong><span>동반가능_시각장애인 편의시설</span></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
        </div>
      </div>      
    </div>    
    
    
  
    
  </main>
</body>
</html>

<%@include file="../include/footer1.jsp"%>
<script src="/resources/js/details.js"></script>