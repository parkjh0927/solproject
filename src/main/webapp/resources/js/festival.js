let page = 1;
const pageSize = 12;

function fetchData() {
  const url = `https://apis.data.go.kr/B551011/KorService1/searchFestival1?numOfRows=${pageSize}&pageNo=${page}&MobileOS=AND&MobileApp=SolTour&_type=json&arrange=R&eventStartDate=20230101&serviceKey=XQa%2FASRtG5fdnoXmCcOAnCDgWeQrvUNGpQZLKr10Wa7YyOOZXFTm0sB7i%2FwvFvAUSmuQdj89r5ay%2BfTA7ASTIw%3D%3D`;

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
    str +=
      '<div class="date">' +
      data.eventstartdate +
      "~" +
      data.eventenddate +
      "</div>";
    str += '<div class="loc">' + data.addr1 + "</div>";
    str += "</div>";
    str += "</a>";
    str += "</li>";
  });

  document.querySelector("#fstvlList").innerHTML += str;
}

function loadMore() {
  page++; // 페이지 번호를 증가시킴
  fetchData()
    .then((items) => showItems(items))
    .catch((error) => console.log(error));
}

// 더보기 버튼 클릭 이벤트 설정
const loadMoreButton = document.querySelector("#loadMoreButton");
loadMoreButton.addEventListener("click", loadMore);

// 초기 데이터 로드
fetchData()
  .then((items) => showItems(items))
  .catch((error) => console.log(error));