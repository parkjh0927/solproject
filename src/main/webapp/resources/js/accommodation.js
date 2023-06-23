/**
 *
 */
let str2 = "";
let url = "";
let page = 1;
const pageSize = 12;

function locData(land) {
  url =
    "https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode=" +
    land +
    "&_type=json&serviceKey=dVc6uZ5KOp94pMCftRbK5zA%2B2EU1SQWrv4kESfpVx4CX5vOZ4D1sKUeX7ewO7gXhXzx6g5t6nz0LFrvS2b1xUA%3D%3D";

  console.log(document.getElementById("searchLand").value);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("지역 코드 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let item = data.response.body.items.item;
      let n = data.response.body.numOfRows;
      i = 0;
      item.forEach((data) => {
        if (i < n) {
          str2 +=
            '<option value="' + data.code + '">' + data.name + "</option>";
          i += 1;
        }
      });
      document.querySelector("#searchArea").innerHTML = str2;
    })
    .catch((error) => console.log(error));
}

document.querySelector("#searchLand").addEventListener("change", (e) => {
  str2 = "";
  document.querySelector("#searchArea").innerHTML = "";
  let land = document.getElementById("searchLand").value;
  console.log(land);
  locData(land);
});

let str = "";
function showList() {
  const url =
    "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=O&areaCode=" +
    document.getElementById("searchLand").value +
    "&sigunguCode=" +
    document.getElementById("searchArea").value +
    "&serviceKey=dVc6uZ5KOp94pMCftRbK5zA%2B2EU1SQWrv4kESfpVx4CX5vOZ4D1sKUeX7ewO7gXhXzx6g5t6nz0LFrvS2b1xUA%3D%3D";

  console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("관광지 요청 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      item = data.response.body.items.item;
      str += '<ul class="other_festival_ul" id="fstvlList">';
      i = 0;
      item.forEach((data) => {
        if (i < 12) {
          console.log(data.title);
          console.log(data.title);
          console.log(data.eventstartdate);
          console.log(data.eventenddate);
          console.log(data.firstimage);

          str += "<li>";
          str += '<a href="#">';
          str += '<div class="other_festival_img  open">';
          str += "<img src=" + data.firstimage + ">";
          str += '<div class="sing_area">';
          str += '<div class="blind">문화 관광 축제</div>';
          str += "</div>";
          str += "</div>";
          str += '<div class="other_festival_content">';
          str += "<strong>" + data.title + "</strong>";
          str += '<div class="loc">' + data.addr1 + "</div>";
          str += "</div>";
          str += "</a>";
          str += "</li>";
          i += 1;
        }
      });
      str += "</ul>";
      document.querySelector(".tab_cont_area").innerHTML = str;
    })
    .catch((error) => console.log(error));
}
document.querySelector("#searchArea").addEventListener("change", (e) => {
  str = "";
  showList();
  document.querySelector("#fstvlList").style.display = "none";
});

function lodgmentData() {
  const url = `https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=${pageSize}&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&arrange=R&serviceKey=XQa%2FASRtG5fdnoXmCcOAnCDgWeQrvUNGpQZLKr10Wa7YyOOZXFTm0sB7i%2FwvFvAUSmuQdj89r5ay%2BfTA7ASTIw%3D%3D`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터를 불러올 수 없습니다.");
      }
      return response.json();
    })
    .then((data) => data.response.body.items.item)
    .catch((error) => console.log(error));
}

function showItems(items) {
  if (items.length === 0) {
    console.log("항목이 없습니다.");
    return;
  }

  let str = "";
  items.forEach((data) => {
    console.log(data.title);
    console.log(data.addr1);
    console.log(data.firstimage);

    str += "<li>";
    str += '<a href="#">';
    str += '<div class="other_festival_img  open">';
    str += "<img src=" + data.firstimage + ">";
    str += '<div class="sing_area">';
    str += '<div class="blind">문화 관광 축제</div>';
    str += "</div>";
    str += "</div>";
    str += '<div class="other_festival_content">';
    str += "<strong>" + data.title + "</strong>";
    str += '<div class="loc">' + data.addr1 + "</div>";
    str += "</div>";
    str += "</a>";
    str += "</li>";
  });

  document.querySelector("#fstvlList").innerHTML += str;
}

function loadMore() {
  page++; // 페이지 번호를 증가시킴
  lodgmentData()
    .then((items) => showItems(items))
    .catch((error) => console.log(error));
}

// 더보기 버튼 클릭 이벤트 설정
const loadMoreButton = document.querySelector("#loadMoreButton");
loadMoreButton.addEventListener("click", loadMore);

// 초기 데이터 로드
lodgmentData()
  .then((items) => {
    showItems(items);
    document.querySelector("#fstvlList").style.display = "block"; // 초기에는 #fstvlList를 보이도록 설정
  })
  .catch((error) => console.log(error));
