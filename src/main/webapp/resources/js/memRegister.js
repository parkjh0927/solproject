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
