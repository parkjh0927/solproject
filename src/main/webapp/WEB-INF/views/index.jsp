<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="include/header2.jsp"%>

<link rel="stylesheet" href="/resources/board/css/style.css">
<style>
	.main_curation_area{
	margin-top: 50px;
	}
	
</style>        
		<!-- 관광 -->
		<div class="main_curation_area" >
				<h2><a href="javascript:randomCrMain();"></a></h2>

				<div class="cont_wrap">

					          
  
					<div class="tab_cont active" id="tabMenu01"><!-- 핫플 -->
						<h3 class="blind">핫플콕콕</h3>
						   
						<div style="position: absolute; top:500px;"></div>
						<p><strong> SOL 투어</strong>와 함꼐하는 지역별 <strong> 핫한 </strong>관광명소를 소개합니다.</p>
							<div class="area_tab" id="area_tab1">
								<ul class="swiper-wrapper">
									<li><button type="button" class="all on" id="travelall" value="">전체</button></li>
									<li><button type="button" class="" id="seoul1" value="1">서울</button></li><li><button type="button" class="" id="incheon" value="2">인천</button></li>
									<li><button type="button" class="" id="deajeon" value="3">대전</button></li><li><button type="button" class="" id="daegu" value="4">대구</button></li>
									<li><button type="button" class="" id="gwangju" value="5">광주</button></li><li><button type="button" class="" id="busan" value="6">부산</button></li>
									<li><button type="button" class="" id="ulsan" value="7">울산</button></li><li><button type="button" class="" id="gyeonggi" value="31">경기</button></li>
									<li><button type="button" class="" id="gangwon" value="32">강원</button></li><li><button type="button" class="" id="chungbuk" value="33">충북</button></li>
									<li><button type="button" class="" id="chungnam" value="34">충남</button></li><li><button type="button" class="" id="gb" value="35">경북</button></li>
									<li><button type="button" class="" id="gb" value="36">경남</button></li><li><button type="button" class="" id="jeonbuk" value="37">전북</button></li>
									<li><button type="button" class="" id="jeonnam" value="38">전남</button></li><li><button type="button" class="" id="jeju" value="39">제주</button></li>
								</ul>
							</div> 
						<ul class="hot" id="test12">
							 
						</ul>
						<div class="more_view" id="hot_more_view1">
							<button type="button">관광지 <strong>핫플콕콕</strong> 추천</button>
							
						</div>
					</div>
				</div>
				
			</div>   
		   
		<!-- 숙소  -->
		<div class="main_curation_area area">
				<div class="cont_wrap">
					<div class="tab_cont active" id="tabMenu01"><!-- 핫플 -->
						<h3 class="blind">핫플콕콕</h3>
						<p><strong> SOL 투어</strong>와 함꼐하는 지역별 <strong> 편안한 </strong>숙소를 소개합니다.</p>
							<div class="area_tab" id="area_tab2">
								<ul class="swiper-wrapper1">  
									<li><button type="button" class="all on" id="travelall1" value="all1">전체</button></li>
									<li><button type="button" class="" id="seoul1" value="1">서울</button></li><li><button type="button" class="" id="incheon" value="2">인천</button></li>
									<li><button type="button" class="" id="deajeon" value="3">대전</button></li><li><button type="button" class="" id="daegu" value="4">대구</button></li>
									<li><button type="button" class="" id="gwangju" value="5">광주</button></li><li><button type="button" class="" id="busan" value="6">부산</button></li>
									<li><button type="button" class="" id="ulsan" value="7">울산</button></li><li><button type="button" class="" id="gyeonggi" value="31">경기</button></li>
									<li><button type="button" class="" id="gangwon" value="32">강원</button></li><li><button type="button" class="" id="chungbuk" value="33">충북</button></li>
									<li><button type="button" class="" id="chungnam" value="34">충남</button></li><li><button type="button" class="" id="gb" value="35">경북</button></li>
									<li><button type="button" class="" id="gb" value="36">경남</button></li><li><button type="button" class="" id="jeonbuk" value="37">전북</button></li>
									<li><button type="button" class="" id="jeonnam" value="38">전남</button></li><li><button type="button" class="" id="jeju" value="39">제주</button></li>
								</ul>
							</div>
							<ul class="hot" id="home123">
					          
					        </ul> 
							<div class="more_view" id="hot_more_home">
								<button type="button" >숙박업소 <strong>핫플콕콕</strong> 추천</button>
								
							</div>
						</div>
					</div>
					           
				</div>
		              
			 
		
<%@include file="include/footer1.jsp"%>
<script src="/resources/js/index.js"></script>
	
			