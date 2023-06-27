<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

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
      text-align: center;
    }

    /* 메인 스타일 */
    main {
      max-width: 800px;
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
      display: flex;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
    }

    .destination img {
      width: 40%;
      border-radius: 5px;
      margin-right: 20px;
    }

    .destination-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
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
    .numbercheck {
      font-size: 15px;
      text-align: center;
    }

    .moresee {
      margin-top: 20px;
    }
  </style>
</head>
<body class="searchre">
  <header class="top">
    <h1>#검색 </h1>
  </header>
     
  <main>          
                   
    <div class="information">
      <div class="destination">
        <img src="seoul.jpg" alt="서울">
        <div class="destination-content">
          <h2>서울</h2>
          <p>서울은 대한민국의 수도로서 역사적인 유적지와 현대적인 건축물이 공존하는 도시입니다.</p>
          <p>주요 관광지: 경복궁, 명동, 남산 타워</p>
        </div>          
      </div>     
    </div>
            
    <div>
      <p class="numbercheck"><strong class="count1" value="0"></strong> 곳 관람중...</p>
      <button type="button" class="moresee">+ 더보기</button>
    </div>
  </main>
</body> 
</html>

<%@include file="../include/footer1.jsp"%>
