const modifyForm = document.querySelector("#modifyForm");

modifyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const lis = document.querySelectorAll(".uploadResult ul li");

  let str = "";
  lis.forEach((ele, idx) => {
    str += "<input type='hidden' name='attachList[" + idx + "].uuid' value='" + ele.dataset.uuid + "'/>";
    str += "<input type='hidden' name='attachList[" + idx + "].uploadPath' value='" + ele.dataset.path + "'/>";
    str += "<input type='hidden' name='attachList[" + idx + "].fileName' value='" + ele.dataset.filename + "'/>";
    str += "<input type='hidden' name='attachList[" + idx + "].fileType' value='" + ele.dataset.type + "'/>";
  });

  //수집한 태그 폼에 추가
  modifyForm.insertAdjacentHTML("beforeend", str);
  console.log("수정폼");
  console.log(modifyForm);

  modifyForm.submit();
});

// 수정, 삭제 클릭 시 동작하는 폼

const differentForm = document.querySelector("#differentForm");

// 삭제 버튼 클릭 시 operForm 보내기
// /board/remove 전송
const btnDan = document.querySelector(".btn-danger");
btnDan.addEventListener("click", () => {
  differentForm.submit();
});


