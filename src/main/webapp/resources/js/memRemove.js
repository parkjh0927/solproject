/**
 * 탈퇴 확인 알림창
 */
document.querySelector(".btn-danger").addEventListener("click", (e) => {
  e.preventDefault();

  const password = document.querySelector("#checkPassword");
  if (password.value.trim() === "") {
    alert("비밀번호를 입력해주세요.");
    return;
  }
  if (confirm("정말 탈퇴하시겠습니까?")) {
    // 폼 전송
    document.querySelector(".leaveForm").submit();
  }
});
