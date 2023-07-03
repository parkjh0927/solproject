<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../include/header2.jsp"%>
<!-- Page Heading -->
<style>
  #content {
  	min-height: 30em;
    max-height: 100em;
    overflow: hidden;
    overflow-y: scroll;
    white-space: pre-line;
    border: 5px solid #ccc;
    padding: 5px;
  }
  
  #title {
  	border: 5px solid #ccc;
  }
  
  #writer {
  	border: 5px solid #ccc;
  }
</style>


<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">Board Read</h1>
</div>
<div class="row">
	<div class="col">
		<form action="" method="post">
			<div>
				<ul>
				</ul>
			</div>
			<div class="form-group">
				<label for="title" style="font-size: 25">Title</label>
				<input type="text" class="form-control" id="title" name="title" readonly value="${dto.title}">
			</div>
			<div class="form-group">
				<label for="content" style="font-size: 25">Content</label>
				<div id="content">
				${dto.content}
				</div>
			</div>
			<div class="form-group">
				<label for="writer" style="font-size: 25">Writer</label>
				<p type="text" class="form-control" id="writer" name="writer" readonly >${dto.writer}</p>
			</div>
			
			<%-- 로그인 상황에서 해당 게시물 작성자와 동일할 때만 보여주기 --%>
			
			<security:authorize access="isAuthenticated()">
				<security:authentication property="principal.username" var="username"/>
				<c:if test="${username == dto.writer}">
					<button type="button" class="btn btn-info">수정</button>
				</c:if>
			</security:authorize>		
			<a class="btn btn-secondary" href="/board/list">목록</a>
			<!-- <button type="button" class="btn btn-secondary">목록</button> -->
		</form>
	</div>
</div>




<form action="" id="operForm">
	<input type="hidden" name="bno" value="${dto.bno}" />
	<input type="hidden" name="page" value="${cri.page}" />
	<input type="hidden" name="amount" value="${cri.amount}" />
	<input type="hidden" name="type" value="${cri.type}" />
	<input type="hidden" name="keyword" value="${cri.keyword}" />
</form>


<script>
	//게시물 글번호 가져오기
	const bno = ${dto.bno};
	
	// CSRF 토큰 값 생성
	const csrfToken = '${_csrf.token}';
</script>


<script src="/resources/js/read.js"></script>
<%@ include file="../include/footer1.jsp"%>















