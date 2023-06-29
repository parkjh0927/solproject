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
	  <div class="information">
	  	<div class='destination' id=" + e.contentid + " type='button'>
		 <!-- <img src=" + e.firstimage2 + "> -->
			<div class='destination-content'>
			  <!-- <h2>" + e.title + "</h2>
			  <p>주소 : " + e.addr1 + "</p>
			  <p>전화번호 : " + e.tel + "</p>
		      <input class = 'conInput' hidden value='" + e.contentid + "'></input>
		  	  <input class = 'contyInput' hidden value='" + e.contenttypeid + "'></input> -->
	     	</div>
	    </div>
	    <form id='locals' action='http://localhost:8080/travel/details'>
	       <input hidden id='con1' name='contentId'/>
	       <input hidden id='con2' name='contenttypeId'/>
	    </form>
	 </div>
   </main> 
    
 <%@include file="../include/footer1.jsp"%>