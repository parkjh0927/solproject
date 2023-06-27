/**
 * 탈퇴 확인 알림창
 */
document.querySelector(".leaveBtn").addEventListener("click", (e) => {
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

// // 모달 창 열기
// function openModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }

// // 모달 창 닫기
// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// // 확인 버튼 클릭 시
// function confirmLeave() {
//   const password = document.querySelector("#checkPassword");
//   if (password.value.trim() === "") {
//     alert("비밀번호를 입력해주세요.");
//     return;
//   }
//   if (confirm("정말 탈퇴하시겠습니까?")) {
//     // 폼 전송
//     document.querySelector(".leaveForm").submit();
//   }
// }

// // 모달 창 열기 버튼 클릭 시
// var leaveBtn = document.querySelector(".leaveBtn");
// leaveBtn.onclick = function () {
//   openModal();
// };

// // 모달 창 닫기 버튼 클릭 시
// var closeBtn = document.querySelector(".close");
// closeBtn.onclick = function () {
//   closeModal();
// };
