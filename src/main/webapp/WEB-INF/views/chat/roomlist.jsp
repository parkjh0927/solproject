<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">



<style>


</style>

</head>
<body>

<br>

<!-- 채팅방 목록 -->

<c:set var="roomName" value="${roomName}" />

<div class="col-8">

</div>

<br>

<c:if test="${not empty roomName}">
    <script>
        alert("${roomName.name} 방이 개설되었습니다.");
    </script>
</c:if>
        <div class="container">
            <div>
            <ul>
                <c:forEach items="${list}" var="room">
                <!-- 각 room 요소의 roomId를 파라미터로 전달하여 채팅방 링크를 생성. room.name은 채팅방의 이름을 표시. -->
                    <li><a href="<c:url value='/chat/room2'><c:param name='roomId' value='${room.roomId}'/></c:url>">${room.name}</a></li>
                </c:forEach>
            </ul>
            </div>
        </div>
        
        
        <!-- POST 메서드를 사용하여 /chat/room으로 데이터를 제출하는 폼을 생성 -->       
        <form action="<c:url value='/chat/room2' />" method="post" class="roomForm">
		    <div class="container">
		    <c:if test="${empty list}">
				<h4>채팅중인 방이 없습니다. 채팅방을 개설해보세요</h4>
			</c:if>
			<br>
	    <div class="row">
	        <div class="col-4">
	            <div class="pl-3 pr-3">
		            <input type="text" name="name" class="form-control roomName">
		        </div>
		        </div>
		        <div class="col-4">
		            <button class="btn btn-primary btn-create">개설하기</button>
		        </div>
		        </div>
		    </div>
		    <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
		</form> 
		
		
		


<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
<script src="../resources/js/chatroomlist.js"></script>
</body>
</html>