/**
 * 
 */
// 전체지역 관광명소 랜덤으로 가져오기
const target1 = document.querySelector("#travelall");

target1.addEventListener("click", (e) => {
  

  // 관광지 검색 URL
  const url =
    "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

  // 전국 검색을 수행하는 로직을 작성합니다.
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
            <li onclick="__traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
              <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                <div class="img_scale">
                  <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                </div>
                <strong>${e.title}</strong>
              </a>
            </li>
          `;
        })
        .join("");

      document.querySelector("#test12").innerHTML = str;
    })
    .catch((error) => console.log(error));
});

// 배열에서 랜덤으로 count 개수만큼의 아이템을 선택하는 함수
function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
  return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
}




// 각지역 클릭 시 해당 지역 관관명소 랜덤으로 가져오기
const region = document.querySelector("#area_tab1");
region.addEventListener("click", (e) =>{
    const clicked = e.target;
    const value = clicked.value;
    
    console.log(value);

    const url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=100&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&areaCode=" + value + "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

    fetch(url)
    .then((response) =>{
        if(!response.ok){
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
              <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
                <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                  <div class="img_scale">
                    <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                  </div>
                  <strong>${e.title}</strong>
                </a>
              </li>
            `;
          })
          .join("");
  
        document.querySelector("#test12").innerHTML = str;
      })
      .catch((error) => console.log(error));
  });
  
  // 배열에서 랜덤으로 count 개수만큼의 아이템을 선택하는 함수
  function getRandomItems(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
    return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
  }




  // 오늘의 핫플 클릭 시 관광명소 랜덤으로 가져오기
const more_view = document.querySelector(".more_view");

more_view.addEventListener("click", (e) => {
  

  // 관광지 검색 URL
  const url =
    "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

  // 전국 검색을 수행하는 로직을 작성합니다.
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
            <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
              <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                <div class="img_scale">
                  <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                </div>
                <strong>${e.title}</strong>
              </a>
            </li>
          `;
        })
        .join("");

      document.querySelector("#test12").innerHTML = str;
    })
    .catch((error) => console.log(error));
});

// 배열에서 랜덤으로 count 개수만큼의 아이템을 선택하는 함수
function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
  return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
}








//숙박 정보
// 전체지역 숙박업소 랜덤으로 가져오기
const target2 = document.querySelector("#travelall1");

target2.addEventListener("click", (e) => {
  

  // 숙박업소 검색 URL
  const url =
    "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

  // 전국 검색을 수행하는 로직을 작성합니다.
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
            <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
              <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                <div class="img_scale">
                  <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                </div>
                <strong>${e.title}</strong>
              </a>
            </li>
          `;
        })
        .join("");

      document.querySelector("#home123").innerHTML = str;
    })
    .catch((error) => console.log(error));
});

// 배열에서 랜덤으로 count 개수만큼의 아이템을 선택하는 함수
function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
  return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
}



// 각지역 클릭 시 해당 지역 숙박업소 랜덤으로 가져오기
const region1 = document.querySelector("#area_tab2");
region1.addEventListener("click", (e) =>{
    const clicked = e.target;
    const value = clicked.value;
    
    console.log(value);

    const url = "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&areaCode="+ value +"&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

    fetch(url)
    .then((response) =>{
        if(!response.ok){
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
              <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
                <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                  <div class="img_scale">
                    <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                  </div>
                  <strong>${e.title}</strong>
                </a>
              </li>
            `;
          })
          .join("");
  
        document.querySelector("#home123").innerHTML = str;
      })
      .catch((error) => console.log(error));
  });
  
  // 배열에서 랜덤으로 count 개수만큼의 아이템을 선택하는 함수
  function getRandomItems(arr, count) {
    const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
    return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
  }



   // 오늘의 핫플 클릭 시 숙박업소 랜덤으로 가져오기
const more_view1 = document.querySelector("#hot_more_view");

more_view1.addEventListener("click", (e) => {
  

  // 관광지 검색 URL
  const url =
    "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

  // 전국 검색을 수행하는 로직을 작성합니다.
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
            <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
              <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
                <div class="img_scale">
                  <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
                </div>
                <strong>${e.title}</strong>
              </a>
            </li>
          `;
        })
        .join("");

      document.querySelector("#home123").innerHTML = str;
    })
    .catch((error) => console.log(error));
});

// 배열에서 랜덤으로 count 개수만큼의 아이템을 선택하는 함수
function getRandomItems(arr, count) {
  const shuffled = arr.sort(() => 0.5 - Math.random()); // 배열을 랜덤하게 섞음
  return shuffled.slice(0, count); // count 개수만큼의 아이템을 선택하여 반환
}





//====전체 클릭 시 관광지 순서대로 넘어 가기
// //전체 클릭 시 관광지 변경
// const all = document.querySelector("#travelall");
// all.addEventListener("click", (e) => {
//   // 관광지 검색 URL
//   const url =
//     "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=11900&MobileOS=ETC&MobileApp=sol%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

//   // 전국 검색을 수행하는 로직을 작성합니다.
//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("관광지 요청 실패");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const item = data.response.body.items.item;

//       // 클릭할 때마다 다음 4개의 아이템을 선택
//       const nextItems = getNextItems(item, 4);

//       // 선택된 아이템들을 문자열로 변환
//       const str = nextItems
//         .map((e) => {
//           return `
//             <li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">
//               <a href="javascript:goCurationContent('6d2117db-1bb7-4e65-b60a-4e4109a06b0a', '경주 오릉', 'MAIN_A');">
//                 <div class="img_scale">
//                   <div class="img_wrap" style="background-image:url(${e.firstimage2})"></div>
//                 </div>
//                 <strong>${e.title}</strong>
//               </a>
//             </li>
//           `;
//         })
//         .join("");

//       document.querySelector("#test12").innerHTML = str;
//     })
//     .catch((error) => console.log(error));
// });

// // 배열에서 다음 count 개수만큼의 아이템을 선택하는 함수
// function getNextItems(arr, count) {
//   const startIndex = getNextIndex(arr); // 다음 시작 인덱스 계산
//   const endIndex = startIndex + count; // 종료 인덱스 계산
//   return arr.slice(startIndex, endIndex); // 시작부터 종료 인덱스까지의 아이템을 선택하여 반환
// }

// // 다음 시작 인덱스를 계산하는 함수
// let currentIndex = 0;
// function getNextIndex(arr) {
//   const nextIndex = currentIndex; // 현재 인덱스를 가져옴
//   currentIndex = (currentIndex + 4) % arr.length; // 4를 더한 후 배열의 길이로 나눈 나머지를 새로운 현재 인덱스로 설정
//   return nextIndex; // 다음 시작 인덱스 반환
// }

// // 각 지역 클릭 시 해당 지역 관광지 보여주기
// // 버튼 범위 안에서 클릭한 버튼 value값 가져오기
// const target1 = document.querySelector(".area_tab");

// target1.addEventListener("click", (e) => {
//   const clickedElement = e.target; // 클릭한 요소 가져오기
//   const value = clickedElement.value; // 클릭한 요소의 value 값 가져오기

//   console.log(value);

//   url = ("")

// });

















//===맨 처음에 만든 코드
// //클릭한 지역 요소 가져와서 아이디 값으로 변경
// const target1 = document.querySelector(".area_tab");


// target1.addEventListener("click", (e) => {
//     const clickedElement = e.target; // 클릭한 요소 가져오기
//     const id = clickedElement.id; // 클릭한 요소의 id 값 가져오기
//     console.log(e.id);

    
//     ///관광지 검색 URL
//     // const url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&MobileOS=ETC&MobileApp=sol%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=12&areaCode="+e.id+"&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//     const url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=9&MobileOS=ETC&MobileApp=sol%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
  

  
//     // 전국 검색을 수행하는 로직을 작성합니다.
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("관광지 요청 실패");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         const item = data.response.body.items.item;

//         //가져온 정보 forEach
//         let str = "";
//         item.forEach((e, index) => {
//             if (index < 4 || Math.random() < 0.25) { // 처음 4개 항목은 보이도록, 나머지 항목은 25%의 확률로 보이도록
//               str += '<li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">';
//               str += '<a href="javascript:goCurationContent(\'6d2117db-1bb7-4e65-b60a-4e4109a06b0a\', \'경주 오릉\', \'MAIN_A\');">';
//               str += '<div class="img_scale">';
//               str += '<div class="img_wrap" style="background-image:url(' + e.firstimage2 + ')"></div>';
//               str += '</div>';
//               str += '<strong>' + e.title + '</strong>';
//               str += '</a>';
//               str += '</li>';
//             }
//           });
//         document.querySelector("#test12").innerHTML = str;
//       })
//       .catch((error) => console.log(error));
  
// });
