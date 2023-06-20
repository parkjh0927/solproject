<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="include/header2.jsp"%>



<div style="width: 350px; position: absolute; left: 10px; top: 90px;">

	<div style="font-size: x-large; font-weight: 900;">

		<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
			<li class="nav-item" role="presentation"
				style="width: 110px; margin-bottom: 10px" id="test1">
				<button class="nav-link active" id="pills-home-tab"
					data-bs-toggle="pill" data-bs-target="#pills-home" type="button"
					role="tab" aria-controls="pills-home" aria-selected="true">검색</button>
			</li>
			<li class="nav-item" role="presentation"
				style="width: 130px; margin-bottom: 10px" id="test2">
				<button class="nav-link" id="pills-profile-tab"
					data-bs-toggle="pill" data-bs-target="#pills-profile" type="button"
					role="tab" aria-controls="pills-profile" aria-selected="false">관광지</button>
			</li>
			<li class="nav-item" role="presentation"
				style="width: 110px; margin-bottom: 10px" id="test3">
				<button class="nav-link" id="pills-contact-tab"
					data-bs-toggle="pill" data-bs-target="#pills-contact" type="button"
					role="tab" aria-controls="pills-contact" aria-selected="false">숙박</button>
			</li>
		</ul>
	</div>


	<div class="tab-content" id="pills-tabContent">
		<div class="tab-pane fade show active" id="pills-home" role="tabpanel"
			aria-labelledby="pills-home-tab" tabindex="0">
			
			<ul>
				<select class="form-select" id="all-code">
					<option value="all">전국zz</option>
					<option value="1">서울특별시</option>
					<option value="6">부산광역시</option>
					<option value="4">대구광역시</option>
					<option value="2">인천광역시</option>
					<option value="5">광주광역시</option>
					<option value="3">대전광역시</option>
					<option value="7">울산광역시</option>
					<option value="8">세종특별자치시</option>
					<option value="31">경기도</option>
					<option value="32">강원도</option>
					<option value="33">충청북도</option>
					<option value="34">충청남도</option>
					<option value="37">전라북도</option>
					<option value="38">전라남도</option>
					<option value="35">경상북도</option>
					<option value="36">경상남도</option>
					<option value="39">제주도</option>
				</select>
				<input id="keyword" type="text"></input>
				<button type="button" id="btn-all" style="border:solid;background-color: aqua;">선택</button>
			</ul>
			
			<div id="aco1"></div>
			
		</div>
		<div class="tab-pane fade" id="pills-profile" role="tabpanel"
			aria-labelledby="pills-profile-tab" tabindex="0">
			
			<ul>
				<select class="form-select" id="festival-code">
					<option value="1">서울특별시</option>
					<option value="6">부산광역시</option>
					<option value="4">대구광역시</option>
					<option value="2">인천광역시</option>
					<option value="5">광주광역시</option>
					<option value="3">대전광역시</option>
					<option value="7">울산광역시</option>
					<option value="8">세종특별자치시</option>
					<option value="31">경기도</option>
					<option value="32">강원도</option>
					<option value="33">충청북도</option>
					<option value="34">충청남도</option>
					<option value="37">전라북도</option>
					<option value="38">전라남도</option>
					<option value="35">경상북도</option>
					<option value="36">경상남도</option>
					<option value="39">제주도</option>
				</select>
				<button type="button" id="btn-festival"style="border:solid;background-color: aqua;">선택</button>
			</ul>
			<div id="aco2"></div>
		</div>
		<div class="tab-pane fade" id="pills-contact" role="tabpanel"
			aria-labelledby="pills-contact-tab" tabindex="0">
			
			<ul>
				<select class="form-select" id="address-code">
					<option value="1">서울특별시</option>
					<option value="6">부산광역시</option>
					<option value="4">대구광역시</option>
					<option value="2">인천광역시</option>
					<option value="5">광주광역시</option>
					<option value="3">대전광역시</option>
					<option value="7">울산광역시</option>
					<option value="8">세종특별자치시</option>
					<option value="31">경기도</option>
					<option value="32">강원도</option>
					<option value="33">충청북도</option>
					<option value="34">충청남도</option>
					<option value="37">전라북도</option>
					<option value="38">전라남도</option>
					<option value="35">경상북도</option>
					<option value="36">경상남도</option>
					<option value="39">제주도</option>
				</select>
				<button type="button" id="btn-aco"style="border:solid;background-color: aqua;">선택</button>
				
			</ul>
			<div id="aco3"></div>
		</div>
	</div>


</div>



<div id="map"
	style="width: 1800px; height: 950px; position: absolute; z-index: 3; left: 350px; top: 90px; border: solid 3px; border-radius: 1%;"></div>
<script type="text/javascript"
	src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ebf0ba5544aa141eea8890b45c9b2e4f"></script>
<script>
	var container = document.getElementById('map');
	var options = {

		// 카카오지도 기본 좌표
		center : new kakao.maps.LatLng(37.413294, 127.0016985),
		level : 3
	};

	//카카오 지도 생성
	var map = new kakao.maps.Map(container, options);

	// 카카오지도 마커 생성
	/* var marker = new kakao.maps.Marker({
		   	// 마커 좌표 ( api에서 숙박업체 위도 경도 가져와서 값 대입하기)
			position: new kakao.maps.LatLng(37.56741, 126.97865), // 마커의 좌표
		    map: map // 마커를 표시할 지도 객체
		}); */
</script>
<div style="height: 1080px"></div>





<!-- JavaScript Bundle with Popper -->
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
	crossorigin="anonymous"></script>

<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
	crossorigin="anonymous"></script>
<script src="../resources/js/map.js"></script>

<%@include file="include/footer1.jsp"%>

