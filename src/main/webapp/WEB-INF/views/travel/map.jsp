<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>여행지도</title>
</head>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="../resources/css/map.css" />
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<!-- 구글 font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@700&display=swap" rel="stylesheet">
<body>
<!-- 사용자 아이디 보여주기 -->
<div style="position:fixed; z-index:995; right:30px; top:70px;">
<security:authorize access="isAuthenticated()">
	<strong><security:authorize access="isAuthenticated()"><security:authentication property="principal.username"/></security:authorize></strong> 님
</security:authorize>
<security:authorize access="!isAuthenticated()">
	손님
</security:authorize>
</div>

<!-- 찜목록 제거 모달 -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel1">찜목록에서 제거하시겠습니까?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        <button type="button" class="btn btn-primary" id='btn-conform'>찜 제거</button>
      </div>
    </div>
  </div>
</div>

<button hidden type="button" class="btn btn-primary" id='open-modal' data-bs-toggle="modal" data-bs-target="#exampleModal1"></button>
<!-- 찜목록 제거 모달 -->

<!-- 지도 모달 창 시작 -->
<button type="button" id="btn-modal" class="btn btn-primary"
	data-bs-toggle="modal" data-bs-target="#exampleModal" hidden></button>
	
<div class="modal fade" id="exampleModal" tabindex="-1"
	aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
		<div class="modal-content">
			<div class="modal-header" style='text-align: center;'>
				<h1 class="modal-title fs-5" id="exampleModalLabel" ></h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal"
					aria-label="Close"></button>
			</div>
			<div class="modal-body" id="modal-content">2</div>
			<div class="modal-footer">
				<a style='position: absolute; left: 20px; padding:10px;' id='find-road' href='' target='_blank'>길찾기</a>
				<button type="button" class="btn btn-danger" id="modal-wish-delete" hidden>찜목록 제거</button>
				<security:authorize access="isAuthenticated()">
					<button type="button" class="btn btn-warning" id="modal-wish">찜목록 추가</button>
				</security:authorize>
				<input id='submitaddr1' hidden/>
				<input id='submittel' hidden/>
				<input id='submitfirstimage' hidden/>
				<input id='submittitle' hidden/>
				<input id='submitmapx' hidden/>
				<input id='submitmapy' hidden/>
				<form  id='detailForm' action = "http://localhost:8080/travel/details">
					<input id='submitid'  name='contentId' hidden/>
					<input id='submittypeid'  name='contenttypeId' hidden/>
					<button type="submit" class="btn btn-primary" id="modal-like">상세페이지 보기</button>
				</form>
			</div>
		</div>
	</div>
</div>

<!-- 지도 모달 창 종료 -->
    <!-- 사이드바	사이드바	사이드바	사이드바		사이드바	사이드바	사이드바	사이드바 -->
	<div class="left-side-bar">
      <div id='side-title'>
        <span id='side-span'>여행지 목록</span>
      </div>

      <ul id="side-content">
       
      </ul>
    </div>
    <!-- 사이드바 -->
<nav class="navbar navbar-expand bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">홈으로</a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button type='button' class="nav-link active" aria-current="page" id='toggleSidebar'>결과목록보기</button>
        </li>
        <li class="nav-item">
          <button type='button' style='color:#FF1E9D;' class="nav-link active" aria-current="page" id='btn-like'><security:authorize access="isAuthenticated()">찜목록 보기</security:authorize></button>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" type='button' role="button" data-bs-toggle="dropdown" aria-expanded="false" id="search-option">
            조회옵션
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" type='button' id="search-festival">행사지역 조회</a></li>
            <li><a class="dropdown-item" type='button' id="search-bed">숙박시설 조회</a></li>
            <li><a class="dropdown-item" type='button' id="search-keyword">검색조회</a></li>
          </ul>
        </li>
      </ul>
      
      
      <form class="d-flex" role="search" id="search-form">
	        <select class="form-select form-select-sm" hidden aria-label=".form-select-sm example"  id="address-code">
			    <option selected class="select-1" value="null" id="address-select">지역</option>
			    <option value="all" >전국</option>
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

	        <select class="form-select form-select-sm" hidden aria-label=".form-select-sm example" id="type-code">
			    <option selected class="select-1" value="null">검색타입</option>
				<option value="all">전체</option>
				<option value="12">관광지</option>
				<option value="14">문화시설</option>
				<option value="15">축제,공연,행사</option>
				<option value="28">레포츠</option>
				<option value="32">숙박</option>
				<option value="38">쇼핑</option>
				<option value="39">음식점</option>
			</select>
	<!-- 		
			<button type="button" id = "datetest">test</button>
			<select name="searchDate"id="searchDate" title="시기 선택">
				<option value="">시기</option>
				<option value="A">개최중</option>
				<option value="B">개최예정</option>
				<option value="01" id = "searchTest">01월</option>
				<option value="02">02월</option>
				<option value="03">03월</option>
				<option value="04">04월</option>
				<option value="05">05월</option>
				<option value="06">06월</option>
				<option value="07">07월</option>
				<option value="08">08월</option>
				<option value="09">09월</option>
				<option value="10">10월</option>
				<option value="11">11월</option>
				<option value="12">12월</option>
			</select>
	 -->		<input class="form-control me-2" type="date" data-placeholder="시작 날짜 선택" hidden id="select-date" required aria-required="true"></input>
        <input class="form-control me-2" type="search" placeholder="검색어" aria-label="Search" hidden id='search-text'>
        <!-- <button class="btn btn-outline-success search-type" type="button" hidden id='search-btn'><img src="../resources/images/common/btn_header_search.png"></img></button> -->
        <div class="spinner-border" role="status" id='search-buffer' hidden></div>
        <button class="search-type" id='search-btn' type="button" hidden><img src="../resources/images/common/btn_header_search.png"></img></button>
      </form>
    </div>
  </div>
</nav>

<div id='icon'>
	<ul id='icon-ul'>
		<li hidden id="icon-1" type='button'><img src = "../resources/images/map/관광지.png"></img> 관광지</li>
		<li hidden id="icon-2" type='button'><img src = "../resources/images/map/문화시설.png"></img> 문화시설</li>
		<li hidden id="icon-3" type='button'><img src = "../resources/images/map/행사.png"></img>  행사</li>
		<li hidden id="icon-4" type='button'><img src = "../resources/images/map/레포츠.png"></img>  레포츠</li>
		<li hidden id="icon-5" type='button'><img src = "../resources/images/map/숙박.png"></img>  숙박</li>
		<li hidden id="icon-6" type='button'><img src = "../resources/images/map/쇼핑.png"></img>  쇼핑</li>
		<li hidden id="icon-7" type='button'><img src = "../resources/images/map/음식점.png"></img>  음식점</li>
	</ul>
</div>

<!-- 로그인된 사용자 id -->
<input hidden id='csrfToken' name="${_csrf.parameterName}" value="${_csrf.token}" />
<input hidden id='logintest' name='userid' value=
    ' <security:authorize access="isAuthenticated()"><security:authentication property="principal.username"/></security:authorize>'/>
	
	
<div id="map"
	style="width: 100%; height: 100vh; z-index: 1; "></div>
	<!-- style="stroke: none; stroke-dashoffset: 0.5; transform: translateZ(0px); stroke-linejoin: round; fill: none; width: 100%; height: 100vh; position: absolute; z-index: 1; left: -2804px;"></div> -->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=ebf0ba5544aa141eea8890b45c9b2e4f&libraries=services,clusterer,drawing"></script>
<script>var map = new kakao.maps.Map(document.getElementById("map"), {
    center: new kakao.maps.LatLng(36.2683, 127.6358),
    level: 13,
  });</script>

<script src="../resources/js/map.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
</body>
</html>