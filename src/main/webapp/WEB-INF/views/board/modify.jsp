<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../include/header2.jsp"%>
<!-- Page Heading -->
<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">Board Modify</h1>
</div>
<head>

<meta charset="UTF-8">
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-lite.min.js"></script>
</head>
<form action="/board/remove" id="differentForm">
	<input type="hidden" name="bno" value="${dto.bno}" />
	<input type="hidden" name="page" value="${cri.page}" />
	<input type="hidden" name="amount" value="${cri.amount}" />
	<input type="hidden" name="type" value="${cri.type}" />
	<input type="hidden" name="keyword" value="${cri.keyword}" />
	<input type="hidden" name="writer" value="${dto.writer}" />
</form>


<div class="row">
	<div class="col">
		<form action="" method="post" id="modifyForm">
			<div class="form-group">
				<label for="title">Title</label>
				<input type="text" class="form-control" id="title" name="title" value="${dto.title}">
			</div>
			<div class="form-group">
				<label for="content">Content</label>
				<textarea class="form-control" id="summernote" rows="10" name="content">${dto.content}</textarea>
			</div>
			<div class="form-group">
				<label for="writer">Writer</label>
				<input type="text" class="form-control" id="writer" name="writer" readonly value="${dto.writer}">
			</div>
			<input type="hidden" name="bno" value="${dto.bno}" />
			<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
			<%-- 
			
			/board/modify + GET + Criteria 
			/board/modify + POST ==> Criteria 값을 넣어주지 않아도 컨트롤러에서 사용 가능함
			
			<input type="hidden" name="page" value="${cri.page}" />
			<input type="hidden" name="amount" value="${cri.amount}" /> 
			
			--%>	
			
			<security:authorize access="isAuthenticated()">
				<security:authentication property="principal.username" var="username"/>
				<c:if test="${username == dto.writer}">					
					<button type="submit" class="btn btn-info">수정</button>
					<button type="submit" class="btn btn-danger" form="differentForm">삭제</button>			
				</c:if>
			</security:authorize>
			<a class="btn btn-secondary" href="/board/list">목록</a>
		</form>
	</div>
</div>




<script>
$(document).ready(function() {
    $('#summernote').summernote({
      tabsize: 2,
      height: 300,
      toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'underline', 'clear']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['table', ['table']],
          ['insert', ['link', 'picture', 'video']],
          ['view', ['fullscreen', 'codeview', 'help']]
      ]
    });
});
</script>
<script>
	const bno = ${dto.bno};
	const path = '${pageContext.request.requestURI}';
	// CSRF 토큰 값 생성
	const csrfToken = '${_csrf.token}';
</script>
<script src="/resources/js/modify.js"></script>
<%@ include file="../include/footer1.jsp"%>















