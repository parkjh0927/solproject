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
 * 아이디 중복검사
 */
//ajaxSend는 Ajax요청을 보내기전 호출되는 메서드
$(document).ajaxSend(function (e, xhr, options) {
  xhr.setRequestHeader("${_csrf.headerName}", "${_csrf.token}");
});

//propertychange, change, keyup, paste, input 이벤트가 발생할 때마다
$(".id_input").on("propertychange change keyup paste input", function () {
  console.log("keyup 테스트");

  var username = $(".id_input").val(); // .id_input에 입력되는 값
  var data = { username: username }; // '컨트롤에 넘길 데이터이름' : '데이터(.id_input에 입력되는 값)'
  $.ajax({
    type: "post",
    url: "/member/memberIdChk",
    data: data,
  });
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
