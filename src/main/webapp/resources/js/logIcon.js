/**
 * 로그인-로그아웃 버튼 아이콘 변경
 */

window.addEventListener("DOMContentLoaded", function () {
  // 버튼 요소 가져오기
  var loginBtn = document.querySelector(".login-btn");
  var logoutBtn = document.querySelector(".logout-btn");

  if (loginBtn && logoutBtn) {
    // 로그인 여부에 따라 버튼 변화
    if (isAuthenticated) {
      loginBtn.style.display = "none";
      logoutBtn.style.display = "inline-block";
    } else {
      loginBtn.style.display = "inline-block";
      logoutBtn.style.display = "none";
    }
  }

  // 로그아웃 버튼 클릭시 알림창
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (event) {
      var confirmed = confirm("로그아웃 하시겠습니까?");
      if (!confirmed) {
        event.preventDefault(); // 로그아웃 이벤트 취소
      }
    });
  }
});
