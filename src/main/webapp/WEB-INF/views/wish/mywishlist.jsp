<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
 <%@include file="../include/header2.jsp"%>
 
   
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
      margin: 150px;
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
  </style>
  
   <header class="top">
   	 <h1># MY 찜목록</h1>
  </header>
  <div>
      <p class="numbercheck">현재 찜 개수 <strong class="count1" value="0"></strong> 개</p>
    </div>
  <main>
    <c:forEach items="${wishList}" var="e">
          
	  <div class="information" style="position: relative;">
     <button id="delete-wish" type="button" style="position: absolute; top: 10px; right: 10px;  margin-top: 13px;margin-right:6px; z-index: 99;">
          <img src="../resources/img/위시삭제.png" style="height: 50px; width: 50px; margin: 0; padding-right: 5px;">
        </button>
	  	<div class='destination' id="btn-wish" type='button'>
		 <img src=" ${e.firstimage2} "> 
			<div class='destination-content'>
			  <h2>  ${e.title} </h2>
			  <p>주소 :  ${ e.addr1} </p>
			  <p>전화번호 :  
			     <c:choose>
            		<c:when test="${not empty e.tel}">
             			 ${e.tel}
            		</c:when>
          	     <c:otherwise>
              전화번호없음
            </c:otherwise>
          </c:choose>  </p>
	     	</div>
	    </div>
	    <form class='wishForm' action='http://localhost:8080/travel/details'>
	       <input hidden class='con1' name='contentId' value='${e.contentid }'/>
	       <input hidden class='con2' name='contenttypeId' value='${e.contenttypeid }'/>
	    </form>
	 </div>
	 </c:forEach>
	 
	  <input hidden id='csrfToken' name="${_csrf.parameterName}" value="${_csrf.token}" />
	 <input hidden id='logintest' name='userid' value=
    ' <security:authorize access="isAuthenticated()"><security:authentication property="principal.username"/></security:authorize>'/>
	 
   </main> 

<!-- 찜목록 제거 모달 -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">찜목록에서 제거하시겠습니까?</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
        <button type="button" class="btn btn-primary" id='btn-conform'>찜 제거</button>
      </div>
    </div>
  </div>
</div>

<button hidden type="button" class="btn btn-primary" id='open-modal' data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
<!-- 찜목록 제거 모달 -->



<script>
  var count = 0;

  // forEach 반복마다 count를 증가시킴
  <c:forEach items='${wishList}' var='e'>
    count++;
  </c:forEach>

  // 현재 찜 개수 업데이트
  document.querySelector('.count1').innerHTML = count;
</script>
<script src="../resources/js/wishList.js"></script>
 <%@include file="../include/footer1.jsp"%>