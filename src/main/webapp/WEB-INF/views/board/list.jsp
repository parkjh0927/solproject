<!doctype html>
<html lang="en">
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="../include/header2.jsp"%>

<head>

<title>공지사항</title>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link
	href='https://fonts.googleapis.com/css?family=Roboto:400,100,300,700'
	rel='stylesheet' type='text/css'>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel="stylesheet" href="/resources/board/css/style.css">
<style>
	#tableRow, #searchRow{
		margin-left: 100px;
		margin-right: 100px;
		width: 90%
	}
</style>
</head>	
<body>
	<div class="d-sm-flex align-items-center justify-content-between mb-4 padde">

	</div>
	<div class="d-flex" id="searchRow">
		<!-- 검색부분  -->
		<div class="flex-grow-1 pb-2 justify-content-between">
			<form action="" id="searchForm">
				<%-- 검색 버튼 클릭 시 검색 결과는 무조건 1page 부터 봐야 하기 때문에 --%>
				<input type="hidden" name="page" value="1" /> <input type="hidden"
					name="amount" value="${cri.amount}" />
				<div class="form-row">
					
					<div class="form-group col-3">
						<select name="type" id="type" class="form-control">
							<option value="" <c:out value="${cri.type == ''?'selected':''}"/>>---------</option>
							<option value="T"
								<c:out value="${cri.type == 'T'?'selected':''}"/>>제목</option>
							<option value="C"
								<c:out value="${cri.type == 'C'?'selected':''}"/>>내용</option>
							<option value="W"
								<c:out value="${cri.type == 'W'?'selected':''}"/>>작성자</option>
							<option value="TC"
								<c:out value="${cri.type == 'TC'?'selected':''}"/>>제목
								or 내용</option>
							<option value="TW"
								<c:out value="${cri.type == 'TW'?'selected':''}"/>>제목
								or 작성자</option>
							<option value="TCW"
								<c:out value="${cri.type == 'TCW'?'selected':''}"/>>제목
								or 내용 or 작성자</option>
						</select>
					</div>
					<div class="form-group col-5">
						<input type="text" name="keyword" id="keyword"
							class="form-control" value="${cri.keyword}" />
					</div>
					<div class="form-group col-3">
						<button type="submit" class="btn btn-info">검색</button>
					</div>
				</div>
			</form>
		</div>
		<!-- 검색 종료 -->
		<div class="pb-2 px-2">
			<select name="amount" id="amount" class="form-control">
				<%-- pageDTO.cri.amount 가능 --%>
				<option value="10"
					<c:out value="${cri.amount == 10?'selected':''}"/>>10</option>
				<option value="20"
					<c:out value="${cri.amount == 20?'selected':''}"/>>20</option>
				<option value="30"
					<c:out value="${cri.amount == 30?'selected':''}"/>>30</option>
				<option value="40"
					<c:out value="${cri.amount == 40?'selected':''}"/>>40</option>
			</select>
		</div>
		<div class="pb-2">
			<button class="btn btn-xs btn-success" type="button"
				onclick="location.href='/board/register'">Register New
				Board</button>
		</div>
	</div>
	<table class="table table-bordered table-hover" id="tableRow">
		<thead class="table-light">
			<tr>
				<th scope="col">번호</th>
				<th scope="col">제목</th>
				<th scope="col">작성자</th>
				<th scope="col">작성일</th>
				<th scope="col">수정일</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dto" items="${list}">
				<tr>
					<th scope="row">${dto.bno}</th>
					<td><a href="${dto.bno}" class="move">${dto.title}</a> <strong>[${dto.replyCnt}]</strong></td>
					<td>${dto.writer}</td>
					<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm"
							value="${dto.regDate}" /></td>
					<td><fmt:formatDate pattern="yyyy-MM-dd HH:mm"
							value="${dto.updateDate}" /></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	
	
	
	
	
	
	
	
	
	<!-- 페이지 나누기 시작 -->
	<nav aria-label="...">
		<ul class="pagination justify-content-center">
			<c:if test="${pageDTO.prev}">
				<li class="page-item"><a class="page-link"
					href="${pageDTO.startPage-1}">Previous</a></li>
			</c:if>

			<c:forEach begin="${pageDTO.startPage}" end="${pageDTO.endPage}"
				var="idx">
				<!-- <li class="page-item active"></li> -->
				<li class="page-item ${pageDTO.cri.page==idx?'active':'' }"><a
					class="page-link" href="${idx}">${idx}</a></li>

			</c:forEach>

			<c:if test="${pageDTO.next}">
				<li class="page-item"><a class="page-link"
					href="${pageDTO.endPage+1}">Next</a></li>
			</c:if>
		</ul>
	</nav>
	<!-- 페이지 나누기 종료  -->
	<!-- Modal -->
	<div class="modal" tabindex="-1" id="registerModal">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">게시글 등록</h5>
					<button type="button" class="close" data-dismiss="modal"
						aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<p>처리가 완료되었습니다.</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary"
						data-dismiss="modal">Close</button>
				</div>
			</div>
		</div>
	</div>
	<!-- 페이지 나누기 링크 처리를 위한 폼 -->
	<form action="/board/list" id="operForm">
		<%-- pageDTO.cri.page 가능  --%>
		<input type="hidden" name="page" value="${cri.page}" /> <input
			type="hidden" name="amount" value="${cri.amount}" /> <input
			type="hidden" name="type" value="${cri.type}" /> <input
			type="hidden" name="keyword" value="${cri.keyword}" />
	</form>
	<script>
		const result = '${result}';
		// result = 'success'; 수정,삭제
		// result = '35';  등록
	</script>
	<%@include file="../include/footer1.jsp"%>
	<script src="/resources/js/jquery.min.js"></script>
	<script src="/resources/js/popper.js"></script>
	<script src="/resources/js/bootstrap.min.js"></script>
	<script src="/resources/js/main.js"></script>
	<script src="/resources/js/list.js"></script>
</body>


</html>
