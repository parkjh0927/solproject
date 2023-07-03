//준형 작성
startDate = 20230101
endDate = 20231231
areaCode = ""
document.querySelector("#btnSearch").addEventListener("click", () =>{
  startDate = "2023"+document.getElementById("searchDate").value+"01"
  endDate = "2023"+document.getElementById("searchDate").value+"31"
  areaCode = document.getElementById("searchArea").value
  document.querySelector("#fstvlList").innerHTML = ""
  start()
})






//준형 작성
let page = 1;
const pageSize = 12;

function fetchData() {
  const url = `https://apis.data.go.kr/B551011/KorService1/searchFestival1?numOfRows=${pageSize}&pageNo=${page}&MobileOS=AND&MobileApp=SolTour&_type=json&arrange=R&eventStartDate=${startDate}&eventEndDate=${endDate}&areaCode=${areaCode}&serviceKey=XQa%2FASRtG5fdnoXmCcOAnCDgWeQrvUNGpQZLKr10Wa7YyOOZXFTm0sB7i%2FwvFvAUSmuQdj89r5ay%2BfTA7ASTIw%3D%3D`;

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
    str += "<li>";
    str += '<a href="/travel/details?contentId='+data.contentid+'&contenttypeId='+data.contenttypeid+'">';
    str += '<div class="other_festival_img">';
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
  start()
}

// 더보기 버튼 클릭 이벤트 설정
const loadMoreButton = document.querySelector("#loadMoreButton");
loadMoreButton.addEventListener("click", loadMore);

// 초기 데이터 로드


function start(){
  fetchData()
  .then((items) => showItems(items))

  .catch((error) => console.log(error));

}

start()


