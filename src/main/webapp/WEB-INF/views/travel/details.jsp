<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="../include/header2.jsp"%>

<html>
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
      justify-content: center;
      align-items: center;
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

    /* 여행지 스타일 */
    .destination {
      margin-bottom: 20px;
      padding-bottom: 20px;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .destination img {
      /* width: 40%; */
      border-radius: 5px;
      margin-right: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 50px;
      margin-bottom: 20px;
      
      
    }

    .destination-content {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
      margin-bottom: 20px;
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
      margin-top: 50px;
      font-size: 50px;
      display: flex;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 20px;
    }

  
	li {
    list-style: none;
}
	ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
}
	.wrap_contView .area_txtView ul li {
    float: left;
    width: 50%;
    padding: 3px 0 6px 0;
    display: table;
    font-size: 15px;
    font-weight: 400;
    background: none !important;
}
	.wrap_contView .area_txtView ul li strong {
    float: none;
    margin-right: 0;
    position: relative;
    display: table-cell;
    width: 128px;
    padding: 0 0 0 12px;
    font-weight: 700;
    color: #333;
}
	.wrap_contView .area_txtView ul li strong {
    float: none;
    margin-right: 0;
    position: relative;
    display: table-cell;
    width: 128px;
    padding: 0 0 0 12px;
    font-weight: 700;
    color: #333;
}
	.wrap_contView .area_txtView .inr ul li > strong {
    float: left;
    width: 26%;
    margin-right: 4%;
    font-size: 15px;
    color: #333;
    font-weight: normal;
}
	.wrap_contView .area_txtView ul li span {
    float: none;
    width: auto;
    display: table-cell;
    color: #666;
    padding-right: 20px;
    line-height: 1.4;
}
	.wrap_contView .area_txtView .inr ul li > span {
    float: left;
    width: 70%;
    font-size: 15px;
    color: #333;
    line-height: 26px;
}
	.wish{
	margin: 150px 0px 0px 1100px; 
	font-size: 20px;
	}
	.reply{
	width: 1000px; 
	justify-content: center;
    align-items: center;
    margin-left: 230px;
	}
	
	#reply-content {
  	height: 150px;
 	width: 800px;
 	margin-left: 90px;
}

	#btn-reply-save {
	  float: right; /* 등록 버튼 오른쪽 정렬 */
	}
	#card1{
	font-size: 20px;
	}
  </style>
<head>
</head>
<body>
         <div class="wish">
    			<button type="button">찜 추가 하기</button>
    		</div>
      
  <main class="main">   
    <form action="/travel/details">
    <div class="information">
    	<div class="commons">
    		
	      <div class="destination">
	        <img src="seoul.jpg">
	                   
	      </div>
	
	      <div class="destination">
	        
	        <div class="destination-content">
	          <h2>상세정보 </h2>
	          
	        </div>
	      </div>  
    
	      <div class="destination">
	        
	        <div class="destination-content">
	         
	          <p>상세정보 내용 </p>
	                 
	        </div>   
	      </div>      
    	</div>  
      <div class="destination">
        
        <div class="destination-content">
	        <div class="wrap_contView" id="detailinfoview">
				<div class="area_txtView bottom">
					<div class="inr_wrap">  
						<div class="inr">
							<ul>
								
							</ul>
							<ul>
								
							</ul>
						</div>
					</div>
				</div>
			</div>
        </div>
      </div>      
    </div>    
    </form>         
    
   
    
  </main>
</body>
<div class="reply1">
	<div class="card">
     <form>
     <input type="text" name="username" class="rep" id="username" readonly
     			value='<security:authentication property="principal.username"/>'>
		<div class="card-body">
			<textarea id="dereply" name="dereply" class="form-control" rows="2"></textarea>
		</div>
		<div class="card-footer">
			<button type="button" id="btn-reply-save" class="btn btn-primary">등록</button>
		</div>
		</form>
	</div>
    
    
<div class="card" id="card1">
		<div class="card-header">댓글 리스트</div>
		<ul id="reply--box" class="list-group">
			
			<li id="reply--1" class="list-group-item d-flex justify-content-between">
				<div>댓글내용</div>
				<div class="d-flex">
					<div class="">작성자</div>
					<button class="warning">수정</button>
					<button class="badge">삭제</button>
				</div>
			</li>

		</ul>
	</div>
</div>

<!-- 댓글 수정 폼 -->
<div class="modal" tabindex="-1" id="replyModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">댓글 수정</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="hidden" name="rno" id="rno" />
      <div class="form-group">
      	<textarea name="dereply" id="dereply" rows="4" class="form-control"></textarea>
      </div>
      <div class="form-group">
      	<input type="text" name="username" id="username" class="form-control" readonly/>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">수정</button>
      </div>
    </div>
  </div>
</div>
</html>

<form action="" id="operForm">
	<input type="hidden" name="contentid" value="${dto.contentid}">
	<input type="hidden" name="page" value="${cri.page}">
	<input type="hidden" name="amount" value="${cri.amount}">
</form>
<script>
	const contentid = ${dto.contentid}
	const csrfToken = '${_csrf.token}';
</script>
<script src="/resources/js/details.js"></script>
<%@include file="../include/footer1.jsp"%>