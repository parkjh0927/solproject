<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="../include/header2.jsp"%>
<!-- Page Heading -->
<head>
	<link rel="stylesheet" href="/resources/board/css/readstyle.css">

</head>
<style>

</style>


<div class="d-sm-flex align-items-center justify-content-between mb-4">
	<h1 class="h3 mb-0 text-gray-800">Board Read</h1>
</div>
<div class="row">
	<div class="col">
		<form action="" method="post">	
		<section class="article-detail table-common con row align-items-center justify-content-center">
		        <table class="cell" border="1">
		            <colgroup>
		                <col width="100px">
		            </colgroup>
		            <tbody>
		                <tr class="article-title">
		                    <th style="font-size: 1.5em;">Title</th>
		                    <td colspan="3">${dto.title}</td>
		                </tr>
		                <tr class="article-info">
		                    <th style="font-size: 1.5em;">Writer</th>
		                    <td>${dto.writer}</td>
		                </tr>
		                <tr class="article-body">
		                    <td colspan="4"><div id="content">${dto.content}
						</div></td>
		                </tr>
		            </tbody>
		        </table>
		    </section>
			<%-- 로그인 상황에서 해당 게시물 작성자와 동일할 때만 보여주기 --%>
			<div class="text-center">
			
			<security:authorize access="isAuthenticated()">
	            <security:authentication property="principal.username" var="username" />
	            <c:if test="${username == dto.writer}">
	                
	                    <button type="button" class="btn btn-info">수정</button>
	            </c:if>
        	</security:authorize>
            <a class="btn btn-secondary" href="/board/list">목록</a>
        </div>
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















