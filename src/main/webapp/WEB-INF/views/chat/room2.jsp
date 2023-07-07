<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
  <script src="../resources/dist/sockjs.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
  

<link rel="stylesheet" href="../resources/css/chatroom2.css" />

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
<link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>.
<style>

</style>
</head>
<body>

  <div class="container clearfix">
  
  <!-- 참여자 -->
    <div class="people-list">

	    <ul class="people-list">
	    	<h3>채팅중인 회원</h3>
			    <c:forEach items="${username}" var="user">
			        <li class="dropdown-item">${username}</li>
			    </c:forEach>	
		</ul>		
    </div>
   
    
    <div class="chat">
      <div class="chat-header clearfix">             
          <div class="chat-with">${room.name}</div>        
        <div class="chat-about">
        </div>
          <button type="button" class="btn float-right" id="button-exit">Exit</button>
      </div>
                 
      <div class="chat-history" id="msgArea">
      	<!-- 메세지가 동적으로 추가될 부분 -->           
      </div>
      
      <!-- 메세지 입력창 -->
      <div class="chat-message clearfix">
        <textarea name="message-to-send" id="message-to-send" placeholder ="Type your message" rows="3"></textarea>
                       
        <button type="button" id="button-send">Send</button>
      </div> <!-- end chat-message -->
      
    </div> <!-- end chat -->
    
  </div> <!-- end container -->

<script>
                        
var roomName = '${room.name}';
var roomId = '${room.roomId}';
var username = '${username}';     
const csrfToken = '${_csrf.token}';

</script>



<script src="../resources/js/chatroom2.js"></script>

</body>
</html>