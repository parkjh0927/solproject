<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="security" %>





<head><script src="https://www.youtube.com/player_api"></script><script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/0c9b5d20/www-widgetapi.vflset/www-widgetapi.js" async=""></script><script type="text/javascript" async="" src="https://1330chat.visitkorea.or.kr/ttalk/js/ttalkDev.js" charset="UTF-8"></script>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">

	
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

	
	<link rel="shortcut icon" type="image/x-icon" href="https://cdn.visitkorea.or.kr/resources/images/favicon.ico">
	<link rel="stylesheet" type="text/css" href="https://cdn.visitkorea.or.kr/resources/css/swiper.min.css">
	<link rel="stylesheet" type="text/css" href="../resources/css/common.css?v=2023020600151c4c550-ac64-4f2a-97a4-6bb2f2d1552a">
	<link rel="stylesheet" type="text/css" href="../resources/css/main.css?v=2022092700351c4c550-ac64-4f2a-97a4-6bb2f2d1552a">
	<link rel="stylesheet" type="text/css" href="../resources/css/main_mo.css?v=2022092700351c4c550-ac64-4f2a-97a4-6bb2f2d1552a">
	<link rel="stylesheet" type="text/css" href="https://cdn.visitkorea.or.kr/resources/css/switch_main_mo.css">
	<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-6FHD6PPZEF&amp;l=dataLayer&amp;cx=c"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-4XLNR00KRE&amp;l=dataLayer&amp;cx=c"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" id="www-widgetapi-script" src="https://www.youtube.com/s/player/0c9b5d20/www-widgetapi.vflset/www-widgetapi.js" async=""></script><script type="text/javascript" async="" src="https://1330chat.visitkorea.or.kr/ttalk/js/ttalkDev.js" charset="UTF-8"></script><script async="" src="// s3.visitkorea.linkmix.co.kr/dvu-res/visitkorea/collect.min.js?_t=1686722745197"></script><script src="https://www.youtube.com/player_api"></script><script async="" src="https://www.google-analytics.com/analytics.js"></script><script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-LYY1LJZCC4&amp;l=dataLayer&amp;cx=c"></script><script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-PJVBVKB"></script><script src="https://cdn.visitkorea.or.kr/resources/js/jquery-1.11.2.min.js"></script>
	

	<style>
  .navbar-nav li:hover > ul.dropdown-menu {
    display: block;
  }

  .navbar-nav li > ul.dropdown-menu {
    display: none;
    position: absolute;
    min-width: 200px;
    margin-top: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }

  .navbar-nav li > ul.dropdown-menu > li {
    display: block;
    padding: 10px;
  }

  .nav-item > .nav-link {
    position: relative;
    font-size: 20px;
  }

  .nav-item > .nav-link::before {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;	
    background-color: #000;
    top: -4px;
    right: -4px;
    transform: rotate(45deg);
    opacity: 0;
    transition: opacity 0.3s ease;
    align-content: center;	
  }

  .nav-item:hover > .nav-link::before {
    opacity: 1;
  }

  .login-btn {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-image: url(../resources/images/common/icon_header_profile1.png);
    text-indent: -9999px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50% !important;
    border-radius: 100%;
  }
  .logout-btn {
    display: inline-block;
    width: 35px;
    height: 35px;
    background-image: url(../resources/images/common/icon_header_profile2.png);
    text-indent: -9999px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50% !important;
    border-radius: 100%;
    margin-left: 20px;
	}
    
	.search-sub{
     display: inline-block;
    width: 50px;
    height: 35px;
    background-image: url(../resources/images/common/btn_header_search01.png);
    text-indent: -9999px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50% !important;
    border-radius: 100%;
	}
    
    .logoutModal {
      display: none;
      position: fixed;
      width: 100%;
      height: 100%;
      overflow: auto;      
    } 
    .logoutModal-content {
      margin: 15% auto;
      padding: 20px;
      width: 450px;
      border: 1px solid #888;
      border-radius: 10px;
      background-color: #f5f5f5;
      text-align: center;
    }
    .logoutModal-content p {
	  font-size: 18px; 
	}    
    .logoutModal-buttons {
    margin-top: 20px;
    text-align: center;
  	}
}
	.navbar-nav{
	align-content: center;
	}
	
</style>


<title>sol 투어</title>
 
<header id="gnbCommon" class="service_gnb down" style="height: 90px;">
	<!-- 로고자리 -->
		<!-- <h1 class="logo">
			<a class="svgLogo" href="/main/main.do">대한민국구석구석<svg id="pathicon1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="510px" height="86px" viewBox="0 0 510 86" style="enable-background:new 0 0 510 86;" xml:space="preserve"><path class="text-path" d="M483.7,49.5h-39.2c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h28.3v17c0,0.9,0.8,1.7,1.7,1.7c5.8,0,10.4-4.7,10.4-10.4V50.6C484.8,50,484.3,49.5,483.7,49.5z M453,41.3c3.3,3.8,8,5.4,13.7,5.4h1.8c0.9,0,1.7-0.7,1.7-1.7c0-0.9-0.7-1.7-1.7-1.7h0c-4.6,0-9.4-2.4-9.4-7.7V20.8c0-0.9-0.8-1.7-1.7-1.7h-8.7c-0.9,0-1.7,0.8-1.7,1.7v14.7c0,5.4-4.8,7.7-9.4,7.7h0c0,0-18.7,0-18.7,0c4.8-2,10.7-6.4,10.7-15.6v-6.8c0-0.9-0.8-1.7-1.7-1.7h-33.7c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h23.3v5.2c0,15.3-7.7,15.6-7.7,15.6h-24.5c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h19.7v23.2c0,0.9,0.8,1.7,1.7,1.7c5.8,0,10.4-4.7,10.4-10.4V46.6h22.3C445,46.6,449.7,45,453,41.3z M483.1,19.1h-8.7c-0.9,0-1.7,0.8-1.7,1.7v8.1h-4c-0.9,0-1.7,0.7-1.7,1.7s0.7,1.7,1.7,1.7h4v12.7c0,0.9,0.8,1.7,1.7,1.7h8.7c0.9,0,1.7-0.8,1.7-1.7V20.8C484.8,19.9,484.1,19.1,483.1,19.1z M467.1,0H351.6c-23.1,0-42,18.3-43,41.2H272C271,18.3,252.1,0,229,0c-23.7,0-43,19.3-43,43c0,23.7,19.3,43,43,43c23.1,0,42-18.3,43-41.2h36.6c1,22.9,19.9,41.2,43,41.2h115.5c23.7,0,43-19.3,43-43C510.1,19.3,490.8,0,467.1,0z M229,82.3c-21.7,0-39.3-17.6-39.3-39.3c0-21.7,17.6-39.3,39.3-39.3c21.7,0,39.3,17.6,39.3,39.3C268.3,64.7,250.7,82.3,229,82.3z M467.1,82.3H351.6c-21.7,0-39.3-17.6-39.3-39.3c0-21.7,17.6-39.3,39.3-39.3h115.5c21.7,0,39.3,17.6,39.3,39.3C506.4,64.7,488.7,82.3,467.1,82.3z M347.5,41.3c3.3,3.8,8,5.4,13.7,5.4h1.8c0.9,0,1.7-0.7,1.7-1.7c0-0.9-0.7-1.7-1.7-1.7h0c-4.6,0-9.4-2.4-9.4-7.7V20.8c0-0.9-0.8-1.7-1.7-1.7h-8.7c-0.9,0-1.7,0.8-1.7,1.7v14.7c0,5.4-4.8,7.7-9.4,7.7h0c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h1.8C339.4,46.6,344.1,45,347.5,41.3z M377.6,19.1h-8.7c-0.9,0-1.7,0.8-1.7,1.7v8.1h-4c-0.9,0-1.7,0.7-1.7,1.7s0.7,1.7,1.7,1.7h4v12.7c0,0.9,0.8,1.7,1.7,1.7h8.7c0.9,0,1.7-0.8,1.7-1.7V20.8C379.3,19.9,378.5,19.1,377.6,19.1z M254.8,43.3h-18c4.8-2,10.7-6.4,10.7-15.7v-6.8c0-0.9-0.8-1.7-1.7-1.7h-33.7c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h23.3v5.2c0,15.3-7.7,15.7-7.7,15.7h-24.5c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h19.7v23.2c0,0.9,0.8,1.7,1.7,1.7c5.8,0,10.4-4.7,10.4-10.4V46.6h19.7c0.9,0,1.7-0.7,1.7-1.7C256.4,44,255.7,43.3,254.8,43.3z M378.1,49.5h-39.2c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7h28.3v17c0,0.9,0.8,1.7,1.7,1.7c5.8,0,10.4-4.7,10.4-10.4V50.6C379.3,50,378.8,49.5,378.1,49.5z" stroke="undefined" stroke-width="1"></path><path class="text-path" d="M66.2,35.2c0-3.3-1.4-6.2-4.2-8h4.1c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5h-7.4v-4c0-0.6-0.5-1.1-1.1-1.1H53c-0.6,0-1.1,0.5-1.1,1.1v4h-7.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h4.2c-2.7,1.8-4.2,4.7-4.2,8c0,5.4,3.9,9.8,10.9,9.8C62.4,45.1,66.2,40.7,66.2,35.2z M51.2,35.2c0-3.8,1.5-6.8,4.2-6.8c2.7,0,4.2,3.1,4.2,6.8c0,3.8-1.5,6.8-4.2,6.8C52.7,42.1,51.2,39,51.2,35.2z M35.4,19.6H31c-0.6,0-1.1,0.5-1.1,1.1v10.4h-4.2V21.1c0-0.6-0.5-1.1-1.1-1.1h-4.4c-0.6,0-1.1,0.5-1.1,1.1v21.8c-0.6,0.2-1.3,0.5-2.1,0.6c-0.9,0.2-1.9,0.3-3.1,0.3h-7V24.3H14c0.8,0,1.5-0.7,1.5-1.5c0-0.8-0.7-1.5-1.5-1.5H1c-0.6,0-1.1,0.5-1.1,1.1v23.4c0,0.6,0.5,1.1,1.1,1.1h12.6c1.3,0,2.4-0.1,3.3-0.4c0.9-0.3,1.6-0.6,2.2-1.1v15c0,0.6,0.5,1.1,1.1,1.1H22c2.1,0,3.7-1.6,3.7-3.7V35.1h4.2v25.9c0,0.6,0.5,1.1,1.1,1.1h1.8c2.1,0,3.7-1.6,3.7-3.7V20.7C36.5,20.1,36,19.6,35.4,19.6z M78.5,59H57.8v-9.6c0-0.6-0.5-1.1-1.1-1.1h-4.8c-0.6,0-1.1,0.5-1.1,1.1v11.5c0,0.6,0.5,1.1,1.1,1.1h26.6c0.8,0,1.5-0.7,1.5-1.5C80,59.7,79.3,59,78.5,59z M119,51h1.4c2.5,0,4.5-2,4.5-4.4V20.7c0-0.6-0.5-1.1-1.1-1.1H119c-0.6,0-1.1,0.5-1.1,1.1v29.1C117.9,50.5,118.4,51,119,51z M168.8,36h-5.3c0.5-0.6,0.9-1.6,1.2-3c0.3-1.4,0.5-2.6,0.5-3.8v-6.9c0-0.6-0.5-1.1-1.1-1.1h-27.3c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h21.4v5.2c0,1.2-0.1,2.4-0.2,3.5c-0.1,1.2-0.3,2.2-0.7,3.1H132c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h14.7v7.7h-10.1c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5h21.5v11.3c0,0.6,0.5,1.1,1.1,1.1h1.4c2.5,0,4.5-2,4.5-4.4v-9.9c0-0.6-0.5-1.1-1.1-1.1h-10.3v-7.7h15c0.8,0,1.5-0.7,1.5-1.5C170.3,36.6,169.6,36,168.8,36z M84,30.3h-5.5v-9.6c0-0.6-0.5-1.1-1.1-1.1h-4.8c-0.6,0-1.1,0.5-1.1,1.1v29.1c0,0.6,0.5,1.1,1.1,1.1H74c2.5,0,4.5-2,4.5-4.4V33.3H84c0.8,0,1.5-0.7,1.5-1.5C85.5,31,84.8,30.3,84,30.3z M124.8,59h-21.7V48.6c0-0.6-0.5-1.1-1.1-1.1h-4.8c-0.6,0-1.1,0.5-1.1,1.1v12.3c0,0.6,0.5,1.1,1.1,1.1h27.6c0.8,0,1.5-0.7,1.5-1.5C126.3,59.7,125.6,59,124.8,59z M111.8,38.5V22.3c0-0.6-0.5-1.1-1.1-1.1H90.9c-0.6,0-1.1,0.5-1.1,1.1v19.6c0,0.6,0.5,1.1,1.1,1.1h16.4C109.8,42.9,111.8,41,111.8,38.5z M104.8,40h-8V24.2h8V40z" stroke="undefined" stroke-width="1"></path></svg></a>
		</h1>-->
	<!-- 로고자리 -->
	
<div style="background-color: #f8f9fa;">
  <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-size: 1.4rem;">
    <div class="container">
      <a class="navbar-brand" href="/" style="font-size: 1.9rem;">SOL 투어</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              여행 정보
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/travel/festival">축제</a></li>

              <li><a class="dropdown-item" href='<c:url value="/travel/destination"/>'>여행지</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/accommodation/accommodation">숙박 정보</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/board/list">공지사항</a>
          </li>
          
        <security:authorize access="isAuthenticated()">          
          <li class="nav-item dropdown">
            <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              마이페이지
            </a>
	            <ul class="dropdown-menu">
	              <li><a class="dropdown-item" href="/member/myPage">내 정보</a></li>
	              <form action="/wish/mywishlist" method="POST">
					  <li>
					  	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
					    <input type="hidden" name="username" value="<security:authentication property="principal.username" />" />
					    <button type="submit" class="dropdown-item">찜 목록</button>
					  </li>
				  </form>
	            </ul>
          </li>          
        </security:authorize>
	            
          <li class="nav-item">
            <a class="nav-link" href="/travel/map">여행지도</a>
          </li>
        </ul>
        <form class="d-flex" id="search123" action='<c:url value="/travel/search"/>'>
          <input class="form-control me-2" id="inputse" type="search" placeholder="Search" aria-label="Search" name="search"/>
          <button class="search-sub" type="submit">Search</button>
        </form>

              	﻿
		<security:authorize access="!isAuthenticated()">
			<a href="/member/login" class="login-btn">로그인</a>
		</security:authorize>
		<security:authorize access="isAuthenticated()">
			<form class="logoutForm" action="/logout" method="post">
			 <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
			 <button class="logout-btn" type="submit">로그아웃</button>
			</form>
		</security:authorize>

﻿      

      </div>
    </div>
  </nav>
</div>

<!-- 모달 창 -->
<div id="logoutModal" class="logoutModal">
  <div class="logoutModal-content">
    <p></p>
    <div class="logoutModal-buttons">
      <button class="btn btn-danger logoutConfirmBtn">확인</button>
      <button class="btn btn-secondary logoutCancelBtn">취소</button>
    </div>
  </div>
</div>

</header>


<script>	
// 시큐리티 로그인 여부 확인
var isAuthenticated = <%= request.getRemoteUser() != null %>;
</script>

<script src="../resources/js/logIcon.js"></script>
<script src="/resources/js/header.js"></script>

