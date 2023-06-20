<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="include/header2.jsp"%>

 

		<!-- 관광 -->
		<div class="main_curation_area" >
				<h2><a href="javascript:randomCrMain();"></a></h2>
				<div class="cont_wrap">
					

					<div class="tab_cont active" id="tabMenu01"><!-- 핫플 -->
						<h3 class="blind">핫플콕콕</h3>
						
						<div style="position: absolute; top:500px;"></div>
						<p><strong> SOL 투어</strong>와 함꼐하는 지역별 <strong> 핫한 </strong>관광명소를 소개합니다.</p>
							<div class="area_tab">
								<ul class="swiper-wrapper">
									<li><button type="button" class="all on" id="travelall">전체</button></li>
									<li><button type="button" class="" id="seoul">서울</button></li><li><button type="button" class="" id="incheon">인천</button></li>
									<li><button type="button" class="" id="deajeon">대전</button></li><li><button type="button" class="" id="daegu">대구</button></li>
									<li><button type="button" class="" id="gwangju">광주</button></li><li><button type="button" class="" id="busan">부산</button></li>
									<li><button type="button" class="" id="ulsan">울산</button></li><li><button type="button" class="" id="gyeonggi">경기</button></li>
									<li><button type="button" class="" id="gangwon">강원</button></li><li><button type="button" class="" id="chungbuk">충북</button></li>
									<li><button type="button" class="" id="chungnam">충남</button></li><li><button type="button" class="" id="gb">경북</button></li>
									<li><button type="button" class="" id="gb">경남</button></li><li><button type="button" class="" id="jeonbuk">전북</button></li>
									<li><button type="button" class="" id="jeonnam">전남</button></li><li><button type="button" class="" id="jeju">제주</button></li>
								</ul>
							</div>
						<ul class="hot">
							<li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
								<a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
									<div class="img_scale">
										<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=15792fe6-9017-4f60-b10a-d084480dd867&amp;mode=progress)"></div>
									</div>
									<strong>경주 오릉</strong>
								</a>
							</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="2" data-cot-id="c124cad3-5585-4d29-b377-5cde73ff807d" data-content-type="12">
								<a href="javascript:goCurationContent('c124cad3-5585-4d29-b377-5cde73ff807d', '서울 선릉(성종과 정현왕후)과 정릉(중종) [유네스코 세계문화유산]', 'MAIN_A');">
									<div class="img_scale">
										<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=a0863160-1038-4cda-8fa7-ca0330a61cd2&amp;mode=progress)"></div>
									</div>
									<strong>서울 선릉(성종과 정현왕후)과 정릉(중종) [유네스코 세계문화유산]</strong>
								</a>
								
							</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="3" data-cot-id="3aec9d18-3412-404e-87ce-e32893ac0cae" data-content-type="12">
								<a href="javascript:goCurationContent('3aec9d18-3412-404e-87ce-e32893ac0cae', '필암서원 [유네스코 세계문화유산]', 'MAIN_A');">
									<div class="img_scale">
										<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=95289e64-af4b-4bb9-9f99-73a94e1df92a&amp;mode=progress)"></div>
									</div>
									<strong>필암서원 [유네스코 세계문화유산]</strong>
								</a>
							</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="4" data-cot-id="02e24733-9e25-4f84-9d19-09c68a7a75f5" data-content-type="12">
								<a href="javascript:goCurationContent('02e24733-9e25-4f84-9d19-09c68a7a75f5', '일산호수공원', 'MAIN_A');">
									<div class="img_scale">
										<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=2cd8e0b6-e152-425b-be78-b625e3012462&amp;mode=progress)"></div>
									</div>
									<strong>일산호수공원</strong>
								</a>
							</li>
						</ul>
						<div class="more_view">
							<button type="button" onclick="getCurationPlaceContents();">오늘의 <strong>핫플콕콕</strong> 추천</button>
							
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
							<div class="area_tab">
								<ul class="swiper-wrapper">
									<li><button type="button" class="all on" id="travelall">전체</button></li>
									<li><button type="button" class="" id="seoul1">서울</button></li><li><button type="button" class="" id="incheon1">인천</button></li>
									<li><button type="button" class="" id="deajeon1">대전</button></li><li><button type="button" class="" id="daegu1">대구</button></li>
									<li><button type="button" class="" id="gwangju1">광주</button></li><li><button type="button" class="" id="busan1">부산</button></li>
									<li><button type="button" class="" id="ulsan1">울산</button></li><li><button type="button" class="" id="gyeonggi1">경기</button></li>
									<li><button type="button" class="" id="gangwon1">강원</button></li><li><button type="button" class="" id="chungbuk1">충북</button></li>
									<li><button type="button" class="" id="chungnam1">충남</button></li><li><button type="button" class="" id="gb1">경북</button></li>
									<li><button type="button" class="" id="gb1">경남</button></li><li><button type="button" class="" id="jeonbuk1">전북</button></li>
									<li><button type="button" class="" id="jeonnam1">전남</button></li><li><button type="button" class="" id="jeju1">제주</button></li>
								</ul>
							</div>
						<ul class="hot"><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
						<a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
							<div class="img_scale">
								<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=15792fe6-9017-4f60-b10a-d084480dd867&amp;mode=progress)"></div>
							</div>
							<strong>경주 오릉</strong>
						</a>
						<button type="button" class="good" onclick="setLike2('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', this);">좋아요</button>
					</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="2" data-cot-id="c124cad3-5585-4d29-b377-5cde73ff807d" data-content-type="12">
						<a href="javascript:goCurationContent('c124cad3-5585-4d29-b377-5cde73ff807d', '서울 선릉(성종과 정현왕후)과 정릉(중종) [유네스코 세계문화유산]', 'MAIN_A');">
							<div class="img_scale">
								<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=a0863160-1038-4cda-8fa7-ca0330a61cd2&amp;mode=progress)"></div>
							</div>
							<strong>서울 선릉(성종과 정현왕후)과 정릉(중종) [유네스코 세계문화유산]</strong>
						</a>
						<button type="button" class="good" onclick="setLike2('c124cad3-5585-4d29-b377-5cde73ff807d', this);">좋아요</button>
					</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="3" data-cot-id="3aec9d18-3412-404e-87ce-e32893ac0cae" data-content-type="12">
						<a href="javascript:goCurationContent('3aec9d18-3412-404e-87ce-e32893ac0cae', '필암서원 [유네스코 세계문화유산]', 'MAIN_A');">
							<div class="img_scale">
								<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=95289e64-af4b-4bb9-9f99-73a94e1df92a&amp;mode=progress)"></div>
							</div>
							<strong>필암서원 [유네스코 세계문화유산]</strong>
						</a>
						<button type="button" class="good" onclick="setLike2('3aec9d18-3412-404e-87ce-e32893ac0cae', this);">좋아요</button>
					</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="4" data-cot-id="02e24733-9e25-4f84-9d19-09c68a7a75f5" data-content-type="12">
						<a href="javascript:goCurationContent('02e24733-9e25-4f84-9d19-09c68a7a75f5', '일산호수공원', 'MAIN_A');">
							<div class="img_scale">
								<div class="img_wrap" style="background-image:url(https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&amp;id=2cd8e0b6-e152-425b-be78-b625e3012462&amp;mode=progress)"></div>
							</div>
							<strong>일산호수공원</strong>
						</a>
						<button type="button" class="good" onclick="setLike2('02e24733-9e25-4f84-9d19-09c68a7a75f5', this);">좋아요</button>
					</li></ul>
						<div class="more_view">
							<button type="button" onclick="getCurationPlaceContents();">오늘의 <strong>핫플콕콕</strong> 추천</button>
							
						</div>
					</div>
				</div>
				
			</div>
		
			
		
<%@include file="include/footer1.jsp"%>
<script src="/resources/js/index.js"></script>
	
			