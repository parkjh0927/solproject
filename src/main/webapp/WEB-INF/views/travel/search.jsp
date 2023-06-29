<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
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
      max-width: 1000px;
      margin: 20px auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
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
   .information {
  /* 스타일 지정 예시 */
  background-color: #f2f2f2;
  padding: 20px;
  margin: 10px;
  width: 800px;
}

.destination {
  /* 스타일 지정 예시 */
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  height: 250px;
}

.destination img {
  width: 350px;
  height: 200px;
  margin-right: 20px;
}

.destination-content {
  /* 스타일 지정 예시 */
  text-align: center;
  flex-grow: 1;
}

.destination-content h2 {
  /* 스타일 지정 예시 */
  font-size: 18px;
  margin-bottom: 5px;
}

.destination-content p {
  /* 스타일 지정 예시 */
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
}
 .choice-container {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 20px;
      padding: 20px 250px 20px 0;
    }

    .choice {
      margin-left: auto;
      font-size: 15px
    }
  </style>
</head>
<body>
  <header class="top">
    <h1>#전체</h1>
  </header>
       
     <!-- <div class="choice-container">
      <select class="choice">
        <option value="">전체 </option>
        <option value="12">관광지</option>
        <option value="14">문화 시설</option>
        <option value="15">축제, 공연, 행사</option>
        <option value="28">레포츠</option>
        <option value="32">숙박</option>
        <option value="38">쇼핑</option>
        <option value="39">음식점</option>
      </select>
    </div>  -->
    
  <main> 
  
  <c:forEach var="dto" items="${result.item}"> 
    <div class="information">
        <div class='destination' id="${dto.contentid}" type = "button">
		 	<img src="${dto.firstimage2}">
		 <div class='destination-content'>
		  <h2>${dto.title}</h2>
		  	<p>주소 : ${dto.addr1}</p>
		   	<p>${dto.tel}</p>
		    <input class = 'conInput' hidden value='${dto.contentid}'></input>
		  	<input class = 'contyInput' hidden value='${dto.contenttypeid}'></input>
	   </div>
     </div>
    </div>
  	</c:forEach>
                   
      <form id='locals' action='http://localhost:8080/travel/details'>
	       <input hidden id='con1' name='contentId'/>
	       <input hidden id='con2' name='contenttypeId'/>
        </form>
              
    <div>
      <p class="numbercheck"><strong class="count1" value="0"></strong> 곳 관람중...</p>
      <!-- <button type="button" class="moresee">+ 더보기</button> -->
    </div>
  </main>
</body> 
</html>

<script>
  // JSTL 태그를 통해 반복된 아이템들의 길이를 구함
  var count = ${fn:length(result.item)};
  // count1 요소에 갯수 출력
  document.querySelector(".count1").textContent = count;
</script>

<%@include file="../include/footer1.jsp"%>
<script src="/resources/js/search.js"></script>
