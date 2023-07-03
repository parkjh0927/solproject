/**
 * 탈퇴 확인 모달창
 */

const checkPassword = document.getElementById("checkPassword");
const leaveForm = document.querySelector(".leaveForm");
const leaveBtn = document.querySelector(".leaveBtn");
const confirmBtn = document.querySelector(".confirmBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const modal = document.getElementById("myModal");

leaveBtn.addEventListener("click", function () {
  if (checkPassword.value === "") {
    showModal("비밀번호를 입력해주세요.");
  } else {
    showModal("정말 탈퇴하시겠습니까?");
  }
});

function showModal(message) {
  const modalContent = document.querySelector(".modal-content");
  modalContent.querySelector("p").textContent = message;
  modal.style.display = "block";

  // 비밀번호가 비어있지 않을 때, 확인버튼을 누르면 폼 제출
  confirmBtn.addEventListener("click", function () {
    if (checkPassword.value !== "") {
      leaveForm.submit();
    }
    modal.style.display = "none";
  });

  // 취소버튼 누르면 모달창 닫기
  cancelBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });
}
