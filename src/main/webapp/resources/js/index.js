// 화면에 정보 띄어 주고 오늘의 핫플 클릭 시 관광명소 랜덤으로 가져오기

const more_view = document.querySelector("#hot_more_view1");

function loadRandomItems() {
  // 관광지 검색 URL
  const url =
    "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

  // 오늘의 핫플 검색
  fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("관광지 요청 실패");
    }
    return response.json();
  })
  .then((data) => {
    const item = data.response.body.items.item;

    // 가져온 정보 중에서 랜덤으로 4개 선택
    const randomItems = getRandomItems(item, 4);

    // 선택된 랜덤 아이템들을 HTML 문자열로 변환
    let str = randomItems
      .map((e) => {
        return `
        <div class='tour' id='tour' type='button'>
          <li>
            <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
              <div class="img_scale">
                <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
              </div>
              <strong>${e.title}</strong>
              <input class='conInput' hidden value='${e.contentid}'></input>
              <input class='contyInput' hidden value='${e.contenttypeid}'></input>
            </a>
          </li>
        </div>
        `;
      })
      .join("");

    
    str += "<form id='locals' action='http://localhost:8080/travel/details'>";
    str += "<input hidden id='con1' name='contentId'/>";
    str += "<input hidden id='con2' name='contenttypeId'/>";
    str += "</form>";

    document.querySelector("#test12").innerHTML = str;
    document.querySelectorAll(".tour").forEach((tour) => {
      tour.addEventListener("click", () => {
        const contentId = tour.querySelector(".conInput").value;
        const contenttypeId = tour.querySelector(".contyInput").value;
        const con1 = document.querySelector("#con1");
        const con2 = document.querySelector("#con2");
        const form = document.querySelector("#locals");
        con1.value = contentId;
        con2.value = contenttypeId;
        form.submit();
        console.log(contentId);
        console.log(contenttypeId);
      });
    });
  })
  .catch((error) => console.log(error));

}
// 랜덤으로 나오게 하는 함수작성
function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
  return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
}

loadRandomItems(); 
// 오늘의 핫플 클릭시 랜덤으로 변화
more_view.addEventListener("click", loadRandomItems);


//===============================================================


// 전체지역 관광명소 랜덤으로 가져오기
const target1 = document.querySelector("#travelall");
const region = document.querySelector("#area_tab1");

region.addEventListener("click", (e) => {

    // 지역 클릭시 지역에 value 값으로 넣어 놓은 지역 코드 값 가져오기
    const clicked = e.target;
    const value = clicked.value;

    let url = "";
    
    console.log(url);
    
  // 관광지 검색 URL
  // 클릭 지점이 전국 OR 지역이냐에 따라 url 주소 가져오기
  if(value == "all"){
    url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

  } else{
    url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=100&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&areaCode=" + value + "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
  }

  // 관광지 검색을 수행하는 로직
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("관광지 요청 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const item = data.response.body.items.item;

      // 가져온 정보 중에서 랜덤으로 4개 선택
      const randomItems = getRandomItems(item, 4);

      // 선택된 랜덤 아이템들을 HTML 문자열로 변환
      const str = randomItems
        .map((e) => {
          return `
          <div class='tour' id='tour' type='button'>
            <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
              <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                <div class="img_scale">
                  <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                </div>
                <strong>${e.title}</strong>
                <input class='conInput' hidden value='${e.contentid}'></input>
                <input class='contyInput' hidden value='${e.contenttypeid}'></input>
              </a>
            </li>
            </div>
            <form id='locals' action='http://localhost:8080/travel/details'>
            <input hidden id='con1' name='contentId'/>
            <input hidden id='con2' name='contenttypeId'/>
            </form>
          `;
        })
        .join("");

      //

    document.querySelector("#test12").innerHTML = str;
    document.querySelectorAll(".tour").forEach((tour) => {
      tour.addEventListener("click", () => {
        const contentId = tour.querySelector(".conInput").value;
        const contenttypeId = tour.querySelector(".contyInput").value;
        const con1 = document.querySelector("#con1");
        const con2 = document.querySelector("#con2");
        const form = document.querySelector("#locals");
        con1.value = contentId;
        con2.value = contenttypeId;
        form.submit();
        console.log(contentId);
        console.log(contenttypeId);
      });
    });
    })
    .catch((error) => console.log(error));
});


//================================================================================










// 핫플 클릭 시 숙박업소 랜덤으로 가져오기
const more_home = document.querySelector("#hot_more_home");
     
   
// 관광지 검색 URL
const url =
  "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=32&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

// 핫플 숙소 겁색
function rrtt(){
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("숙박업소 요청 실패");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const item = data.response.body.items.item;

    // 가져온 정보 중에서 랜덤으로 4개 선택
    const randomItems = getRandomItems(item, 4);

    // 선택된 랜덤 아이템들을 HTML 문자열로 변환
    const str = randomItems
      .map((e) => {
        return `
        <div class='home' id='home' type='button'>
          <li>
            <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
              <div class="img_scale">
                <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
              </div>
              <strong>${e.title}</strong>
              <input class='conInput1' hidden value='${e.contentid}'></input>
              <input class='contyInput1' hidden value='${e.contenttypeid}'></input>
            </a>
          </li>
        </div>
        <form id='localss' action='http://localhost:8080/travel/details'>
        <input hidden id='con11' name='contentId'/>
        <input hidden id='con22' name='contenttypeId'/>
        </form>
        `;
      })
      .join("");

    document.querySelector("#home123").innerHTML = str;
    document.querySelectorAll(".home").forEach((home) => {
      home.addEventListener("click", () => {
        const contentId1 = home.querySelector(".conInput1").value;
        const contenttypeId1 = home.querySelector(".contyInput1").value;
        const con11 = document.querySelector("#con11");
        const con22 = document.querySelector("#con22");
        const form1 = document.querySelector("#localss");
        con11.value = contentId1;
        con22.value = contenttypeId1;
        form1.submit();
        console.log(contentId1);
        console.log(contenttypeId1);
      });
    });
  })
  .catch((error) => console.log(error));


 }
 rrtt();
// 오늘의 핫플 클릭시 랜덤으로 변화
more_home.addEventListener("click", rrtt);


//================================================================================



// 숙박 정보
// 숙박업소 랜덤으로 가져오기
const target2 = document.querySelector("#travelall1");
const region1 = document.querySelector("#area_tab2");

region1.addEventListener("click", (e) => {
  
  // 지역 클릭시 지역에 value 값으로 넣어 놓은 지역 코드 값 가져오기
  const clicked = e.target;
  const value = clicked.value;

  // 숙박업소 검색 URL
  let url = "";
  // 클릭 지점이 전국 OR 지역이냐에 따라 url 주소 가져오기
  if(value == "all1"){
    url = "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";   
  }else{
    url = "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&areaCode="+ value +"&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
  }

  // 숙박업소를 검색을 수행하는 로직
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("숙박업소 요청 실패");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const item = data.response.body.items.item;

      // 가져온 정보 중에서 랜덤으로 4개 선택
      const randomItems = getRandomItems(item, 4);

      // 선택된 랜덤 아이템들을 HTML 문자열로 변환
      const str = randomItems
        .map((e) => {
          return `
          <div class='home' id='home' type='button'>
            <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
              <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                <div class="img_scale">
                  <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                </div>
                <strong>${e.title}</strong>
                <input class='conInput1' hidden value='${e.contentid}'></input>
                <input class='contyInput1' hidden value='${e.contenttypeid}'></input>
              </a>
            </li>
          </div>
          <form id='localss' action='http://localhost:8080/travel/details'>
          <input hidden id='con11' name='contentId'/>
          <input hidden id='con22' name='contenttypeId'/>
          </form>
          `;
        })
        .join("");

        document.querySelector("#home123").innerHTML = str;
        document.querySelectorAll(".home").forEach((home) => {
          home.addEventListener("click", () => {
            const contentId1 = home.querySelector(".conInput1").value;
            const contenttypeId1 = home.querySelector(".contyInput1").value;
            const con11 = document.querySelector("#con11");
            const con22 = document.querySelector("#con22");
            const form1 = document.querySelector("#localss");
            con11.value = contentId1;
            con22.value = contenttypeId1;
            form1.submit();
            console.log(contentId1);
            console.log(contenttypeId1);
          });
        });
    })
    .catch((error) => console.log(error));
});







  
   


