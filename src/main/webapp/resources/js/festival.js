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
    console.log(data.title);
    console.log(data.eventstartdate);
    console.log(data.eventenddate);
    console.log(data.firstimage);

    str += "<li>";
    str += '<div class="festa_detail">';
    str += '<div class="other_festival_img  open" type="button">';
    str += "<img src=" + data.firstimage + " width=100 height=100>";
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
    str += "</div>";
    str += "</li>";
    str += "<form id='locals' action='http://localhost:8080/travel/details'>";
    str += "<input hidden id='con1' name='contentId'/>";
    str += "<input hidden id='con2' name='contenttypeId'/>";
    str += "<form>";
    document.querySelector("#fstvlList").innerHTML = str;

    // document.querySelectorAll(".festa_detail").forEach((festa_detail) => {
    //   festa_detail.addEventListener("click", () => {
    //     const contentId = festa_detail.querySelector(".conInput").value;
    //     const contenttypeId = festa_detail.querySelector(".contyInput").value;
    //     const con1 = document.querySelector("#con1");
    //     const con2 = document.querySelector("#con2");
    //     const festaForm = document.querySelector("#locals");
    //     con1.value = contentId
    //     con2.value = contenttypeId
    //     festaForm.submit();
    //     console.log(contentId)
    //     console.log(contenttypeId)
            
    // });
    // });
  });

  //document.querySelector("#fstvlList").innerHTML += str;
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


  