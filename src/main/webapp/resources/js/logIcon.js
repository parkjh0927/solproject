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
      event.preventDefault(); // 로그아웃 이벤트 취소
      showModal("로그아웃 하시겠습니까?");
    });
  }

  function showModal(message) {
    const modalContent = document.querySelector(".logoutModal-content");
    const modal = document.querySelector(".logoutModal");
    modalContent.querySelector("p").textContent = message;
    modal.style.display = "block";

    document
      .querySelector(".logoutConfirmBtn")
      .addEventListener("click", function () {
        // 확인 버튼을 클릭한 경우 로그아웃 처리
        document.querySelector(".logoutForm").submit();
        modal.style.display = "none";
      });

    document
      .querySelector(".logoutCancelBtn")
      .addEventListener("click", function () {
        // 취소 버튼을 클릭한 경우 창 닫기
        modal.style.display = "none";
      });
  }
});
