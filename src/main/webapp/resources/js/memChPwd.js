/**
 * 비밀번호 변경시
 */
// 유효성검사
const pwdForm = document.querySelector(".changePwdForm");

pwdForm.addEventListener("submit", (e) => {
  if (!pwdForm.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  pwdForm.classList.add("was-validated");
});

// 비밀번호 재확인
$(".pwd_input").on("keyup paste input", function () {
  console.log("비밀번호 검사 keyup 테스트");

  var inputed = $("#newPassword").val();
  var reinputed = $("#confirmPassword").val();

  if (inputed == reinputed) {
    //비번 일치시
    $(".confirmPW_no").css("display", "none");
    $(".confirmPW_ok").css("display", "inline-block");
  } else if (inputed != reinputed || reinputed == "") {
    // 비번 불일치시
    $(".confirmPW_ok").css("display", "none");
    $(".confirmPW_no").css("display", "inline-block");
  }
});
