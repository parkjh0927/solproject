<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div class="area_notice">
		<div>
			
			
			
			<div class="btn_topWrap main" style="display: block;"><!-- 1210 main 클래스 추가 -->
				<div class="inner">
                          <a href="javascript:;" class="floatingShare" style="display: none;">sns 공유</a>
					
				</div>
			</div>
			
			
			
			
			
			
			<!-- // Swiper Slider -->
			<!-- // 0802 추가 -->

			<!-- Footer 02-23 추가 -->
			<div class="sel_area">
                <div class="sel_member">
                    <select title="관광정보 선택" id="relation2">
                        <option value="">관광정보</option>
                        <option value="https://korean.visitkorea.or.kr/notice/guide_book.do" title="새창">가이드북</option>
						<option value="http://www.benikea.com" title="새창">베니키아</option>
						<option value="https://www.gocamping.or.kr/account/sso/broker.do" title="새창">고캠핑</option>
						<option value="https://www.durunubi.kr" title="새창">두루누비</option>
						<option value="http://kto.visitkorea.or.kr/kor/customer/complaints/intro.kto" title="새창">관광불편신고센터</option>
						<option value="http://www.wififree.kr" title="새창">공공 와이파이</option>
						<option value="http://www.welchon.com" title="새창">농촌여행 웰촌</option>
						<option value="https://www.templestay.com/" title="새창">템플스테이</option>
						<option value="https://www.cha.go.kr/eventInfo/index.do" title="새창">문화유산 유유자적</option>
						<option value="http://safestay.visitkorea.or.kr" title="새창">세이프스테이</option>

						<option value="https://tourdure.mcst.go.kr" title="새창">관광두레</option>

						<option value="photogallery" title="새창">관광사진 갤러리</option>

						<option value="https://api.visitkorea.or.kr/#/" title="새창">TourAPI4.0</option>
						<option value="datalab" title="새창">한국관광 데이터랩</option>
						<option value="https://touraz.kr/index" title="새창">한국관광산업포털</option>
						<option value="https://conlab.visitkorea.or.kr/" title="새창">한국관광 콘텐츠랩</option>
                    </select>
                    <a href="javascript:goRelation2()" class="link_view" title="선택관광정보로_새 창 열림">이동</a>
                </div>
                <div class="sel_member">
                    <select name="relation" id="relation" title="유관기관 선택">
						<option value="">유관기관</option>
						<option value="http://www.0404.go.kr" title="새창">외교통상부 해외 안전여행</option>
						<option value="https://www.youtube.com/watch?v=muB4_LNZ2Rk" title="새창">대한민국의 아름다운영토 독도</option>
						<option value="http://www.museumonroad.org" title="새창">박물관 길위의 인문학</option>
						<option value="http://www.namdokorea.com" title="새창">전남 관광지 순환버스 남도한바퀴</option>
						<option value="http://k-mice.visitkorea.or.kr" title="새창">국가mice 포털</option>
						<option value="http://www.mmca.go.kr" title="새창">국립현대미술관</option>
						<option value="http://www.ggtour.or.kr" title="새창">경기관광공사</option>
						<option value="http://www.ijto.or.kr" title="새창">제주관광공사</option>
						<option value="http://bto.or.kr" title="새창">부산관광공사</option>
						<option value="http://www.travelicn.or.kr" title="새창">인천관광공사</option>
						<option value="http://www.seoulwelcome.com" title="새창">서울관광재단</option>
						<option value="http://www.korail.go.kr" title="새창">한국철도공사</option>
						<option value="http://www.museum.go.kr" title="새창">국립중앙박물관</option>
						<option value="http://www.mcst.go.kr" title="새창">문화체육관광부</option>
						<option value="http://www.fowi.or.kr" title="새창">한국산림복지진흥원</option>
						<option value="http://www.dmz.go.kr" title="새창">디엠지기(DMZIGI)</option>
						<option value="http://vkc.or.kr" title="새창">한국방문위원회</option>
						<option value="http://www.culture.go.kr/wday" title="새창">문화가 있는 날</option>
						<option value="https://inmun360.culture.go.kr" title="새창">인문 360˚</option>
						<option value="https://www.ex.co.kr" title="새창">한국도로공사</option>
					</select>
					<a href="javascript:goRelation();" class="link_view" title="선택 유관기관으로_새 창 열림">이동</a>
                </div>
            </div>
            <!-- -->
		</div>
	</div>
	
	
	<!--  -->
	<ul class="btm_menu">
			  <li><a href="javascript:" onclick="goTerm(1);" class="personal_info">개인정보처리방침</a></li>
			  <li><a href="javascript:" onclick="goTerm(2);">이용약관</a></li><!-- 0703 추가 -->
			  <li><a href="javascript:" onclick="goTerm(3);">위치기반서비스 이용약관</a></li><!-- 0717 추가 -->
			  <li><a href="https://knto.or.kr/helpdeskCopyrightguide" target="_blank" title="새창">저작권정책</a></li>
			  <li><a href="http://kto.visitkorea.or.kr/kor/customer/charter/charter.kto" target="_blank" title="새창">고객서비스헌장</a></li>
			  <li><a href="http://kto.visitkorea.or.kr/kor/helpDesk/policy/emailRejection.kto" target="_blank" title="새창">전자우편무단수집거부</a></li>
			  <li><a href="javascript:" onclick="goQA();" title="페이지이동">Q&amp;A</a></li>
			  <li><a href="http://kto.visitkorea.or.kr/kor/kto/map/head.kto" target="_blank" title="새창">찾아오시는 길</a></li>
			</ul>
			
<!--  -->

<!--  -->
		<ul class="ft_address">
				<li><span>우)26464</span><span>강원도 원주시 세계로 10</span>TEL : 033-738-3000</li>
				<li>사업자등록번호 : 202-81-50707</li>
				<li>통신판매업신고 : 제2009-서울중구-1234호</li>
			</ul>
<!--  -->
	
		