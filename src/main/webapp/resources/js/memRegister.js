/**
 * 회원가입 유효성검사
 * 필수요소 비어있으면 폼 막기
 */
const regForm = document.querySelector(".registerForm");

regForm.addEventListener("submit", (e) => {
  if (!regForm.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
  }

  regForm.classList.add("was-validated");
});

/**
 * 아이디 중복검사 (비동기식)
 */
//csrf 토큰 첨부
var token = $("meta[name='_csrf']").attr("content");
var header = $("meta[name='_csrf_header']").attr("content");

//keyup, paste, input 이벤트가 발생할 때마다 실행
$(".id_input").on("keyup paste input", function () {
  console.log("아이디 중복검사 keyup 테스트");

  var username = $(".id_input").val(); // .id_input에 입력되는 값
  var data = { username: username }; // '컨트롤에 넘길 데이터이름' : '데이터(.id_input에 입력되는 값)'

  // 빈칸일땐 글씨 안뜨게
  if (username.length === 0) {
    $(".id_input_no").css("display", "none");
    return;
  }

  $.ajax({
    type: "post",
    url: "/member/memberIdChk",
    data: data,
    beforeSend: function (xhr) {
      // 토큰 전송
      xhr.setRequestHeader(header, token);
    },
    success: function (result) {
      console.log("성공여부" + result);
      if (result != "fail") {
        // 사용가능한 아이디일때
        $(".id_input_no").css("display", "none");
      } else {
        // 중복된 아이디일때
        $(".id_input_no").css("display", "inline-block");
      }
    },
    error: function (xhr, status, error) {
      console.log(status, error);
    },
  });
});

// 비밀번호 재확인 (비동기식)
$(".pwd_input").on("keyup paste input", function () {
  console.log("비밀번호 검사 keyup 테스트");

  var inputed = $("#password").val();
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

/**
 * 다음 주소찾기 오픈api
 */
function exDaumPostcode() {
  new daum.Postcode({
    oncomplete: function (data) {
      // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드

      // 우편번호와 주소 정보를 해당 필드에 넣기
      console.log("우편번호", data.zonecode);
      document.getElementById("postcode").value = data.zonecode;
      document.getElementById("address").value = data.address;
      // 커서를 상세주소 필드로 이동
      document.getElementById("address2").focus();
    },
  }).open();
}
