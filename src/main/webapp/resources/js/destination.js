const choice = document.querySelector(".choice");
const count1 = document.querySelector(".count1");
const countval = count1.getAttribute("value");
console.log("val=", countval);

// 전역 변수 선언
let currentItems = 10; // 처음에 보여지는 아이템 개수
let selectedValue = ""; // 선택된 옵션 값 초기화

// 더보기 버튼 클릭 이벤트 핸들러
document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// 초기 아이템 로드
loadItems();

// 아이템 로드 함수
function loadItems() {
  let url = "";

  if (selectedValue === "") {
    // 선택된 옵션이 없을 때 전체 아이템 로드
    url =
      "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
      currentItems +
      "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
  } else {
    // 선택된 옵션에 따라 아이템 로드
    url =
      "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
      currentItems +
      "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=" +
      selectedValue +
      "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
  }

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("정보 요청 실패");
      }
      return response.json();
    })
    .then((data) => {
      const item = data.response.body.items.item;
      let str = "";
      
      item.forEach((e) => {
        str += "<div class='destination' id=" + e.contentid + " type='button'>";
        str += "<img src=" + e.firstimage2 + ">";
        str += "<div class='destination-content'>";
        str += "<h2>" + e.title + "</h2>";
        str += " <p>주소 : " + e.addr1 + "</p>";
        if (e.tel) {
            str += " <p>전화번호 : " + e.tel + "</p>";
          }
        str += "<input class = 'conInput' hidden value='" + e.contentid + "'></input>";
        str += "<input class = 'contyInput' hidden value='" + e.contenttypeid + "'></input>";
        str += "</div>";
        str += "</div>";
      });
        str += "<form id='locals' action='http://localhost:8080/travel/details'>";
        str += "<input hidden id='con1' name='contentId'/>";
        str += "<input hidden id='con2' name='contenttypeId'/>";
        str += "<form>";
        document.querySelector(".information").innerHTML = str;
        count1.innerHTML = item.length;
        document.querySelectorAll(".destination").forEach((destination) => {
          destination.addEventListener("click", () => {
            const contentId = destination.querySelector(".conInput").value;
            const contenttypeId = destination.querySelector(".contyInput").value;
            const con1 = document.querySelector("#con1");
            const con2 = document.querySelector("#con2");
            const form = document.querySelector("#locals");
            con1.value = contentId
            con2.value = contenttypeId
            form.submit();
            console.log(contentId)
            console.log(contenttypeId)
            
        });
        });
      })
    .catch((error) => console.log(error));
}

// 더보기 버튼 클릭 이벤트 핸들러
function loadMoreItems() {
  currentItems += 10; // 보여지는 아이템 개수에 10 추가
  loadItems();
}

// 선택 옵션 변경 이벤트 핸들러
choice.addEventListener("change", function () {
  selectedValue = choice.value;
  currentItems = 10; // currentItems 값을 초기화
  loadItems();
});

// // + 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", function () {
//   let numbercheck = document.querySelector(".numbercheck");
//   let currentNumber = parseInt(numbercheck.innerText);

//   let newNumber = currentNumber + 10;

// });


//========================
// const choice = document.querySelector(".choice");   // 소분류(전체, 관광지, 숙박, 음식점, 등....구역)
// let count1 = document.querySelector(".count1");   // 현재 보여주고 있는 상품 갯수 보여주는 곳
// const countval = count1.getAttribute("value");
// console.log("val=", countval);

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems();

// // 아이템 로드 함수
// function loadItems() {
//   let url = "";
    
//   // currentItems = 보여줄 아이템 갯수, selectedValue = 보여줄 아이템 분류 코드
//   if (selectedValue === "") {
//     // 선택된 옵션이 없을 때 전체 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   } else {
//     // 선택된 옵션에 따라 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=" +
//       selectedValue +
//       "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   }

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("정보 요청 실패");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const item = data.response.body.items.item;
//       let str = "";
//       let i_btn = 0;
//       item.forEach((e) => {
//         i_btn += 1;
//         str += "<div class='destination hhhhh" + i_btn + "' id=" + e.contentid + " type='button'>";
//         str += "<img src=" + e.firstimage2 + ">";
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//           str += " <p>전화번호 : " + e.tel + "</p>";
//         }
//         str += "</div>";
//         str += "</div>";
//         str +=
//           "<form action='http://localhost8080/travel/details' method='post'>";
//         str +=
//           "<input class='contentid' hidden value='" + e.contentid + "'>";
//         str +=
//           "<input class='contenttypeid' hidden value='" + e.contenttypeid + "'>";
//         str += "</form>";
//         str +=
//           "<button type='submit' id='btn-content" +
//           i_btn +
//           "' hidden ></button>";
//       });
//       document.querySelector(".information").innerHTML = str;
//       count1.innerHTML = item.length; //item 길이로 현재보여주는 갯수 표시
    
//       // 로그 찍기
//       document.querySelectorAll(".destination").forEach((destination, index) => {
//         destination.addEventListener("click", () => {
//           const contentId = destination.querySelector(".contentid").value;
//           const contentTypeId = destination.querySelector(".contenttypeid").value;
//           console.log("contentId:", contentId);
//           console.log("contentTypeId:", contentTypeId);
//         });
//       });
//     })
//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems();
// }

// // 선택 옵션 변경 이벤트 핸들러
// choice.addEventListener("change", function () {
//   selectedValue = choice.value;
//   currentItems = 10; // currentItems 값을 초기화
//   loadItems();
// });


//============
// const choice = document.querySelector(".choice");   // 소분류(전체, 관광지, 숙박, 음식점, 등....구역)
// let count1 = document.querySelector(".count1");   // 현재 보여주고 있는 상품 갯수 보여주는 곳
// const countval = count1.getAttribute("value");
// console.log("val=", countval);

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems();

// // 아이템 로드 함수
// function loadItems() {
//   let url = "";
    
//   // currentItems = 보여줄 아이템 갯수, selectedValue = 보여줄 아이템 분류 코드
//   if (selectedValue === "") {
//     // 선택된 옵션이 없을 때 전체 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   } else {
//     // 선택된 옵션에 따라 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=" +
//       selectedValue +
//       "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   }

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("정보 요청 실패");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const item = data.response.body.items.item;
//       let str = "";
//       let i_btn = 0;
//       item.forEach((e) => {
//         i_btn += 1;
//         str += "<div class='destination hhhhh" + i_btn + "' id=" + e.contentid + " type='button'>";
//         str += "<img src=" + e.firstimage2 + ">";
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//           str += " <p>전화번호 : " + e.tel + "</p>";
//         }
//         str += "</div>";
//         str += "</div>";
//         str +=
//           "<form action='http://localhost8080/travel/details' method='post'>";
//         str +=
//           "<input class='contentid' hidden value=" + e.contentid + ">" + e.contentid + "</input>";
//           str +=
//           "<input class='contenttypeid hidden value=" + e.contenttypeid + ">" + e.contenttypeid + "</input>";
//         str += "</form>";
//         str +=
//           "<button type='submit' id='btn-content" +
//           i_btn +
//           "' hidden ></button>";
//       });
//       document.querySelector(".information").innerHTML = str;
//       count1.innerHTML = item.length; //item 길이로 현재보여주는 갯수 표시
      
      
    
//     })
//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems();
// }

// // 선택 옵션 변경 이벤트 핸들러
// choice.addEventListener("change", function () {
//   selectedValue = choice.value;
//   currentItems = 10; // currentItems 값을 초기화
//   loadItems();
// });






//=========================

// const choice = document.querySelector(".choice");   // 소분류(전체, 관광지, 숙박, 음식점, 등....구역)
// let count1 = document.querySelector(".count1");   // 현재 보여주고 있는 상품 갯수 보여주는 곳
// const countval = count1.getAttribute("value");
// console.log("val=", countval);

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems();

// // 아이템 로드 함수
// function loadItems() {
//   let url = "";
    
//   // currentItems = 보여줄 아이템 갯수, selectedValue = 보여줄 아이템 분류 코드
//   if (selectedValue === "") {
//     // 선택된 옵션이 없을 때 전체 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   } else {
//     // 선택된 옵션에 따라 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=" +
//       selectedValue +
//       "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   }

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("정보 요청 실패");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const item = data.response.body.items.item;
//       let str = "";
//       let i_btn = 0
//       item.forEach((e) => {
//         i_btn += 1;
//         str += "<div class='destination hhhhh" + i_btn + "' id=" + e.contentid + " type='button'>";
//         str += "<img src=" + e.firstimage2 + ">";
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//           str += " <p>전화번호 : " + e.tel + "</p>";
//         }
//         str +=
//           " <p class='contentid' type='hidden' style='display:none;'>" +
//           e.contentid +
//           "</p>";
//         str += "</div>";
//         str += "</div>";
//         str += "<form action='http://localhost8080/travel/details' method='post'>";
//         str += "<input hidden value = " + item.contenttypeid + "></input>";
//         str += "<input hidden value = " + item.contentid + "></input>";
//         str += "</form>";
//         str += "<button type='submit' id='btn-content" + i_btn + "' hidden ></button>";
//     });
//       document.querySelector(".information").innerHTML = str;
//       count1.innerHTML = item.length; //item 길이로 현재보여주는 갯수 표시
//       document.querySelector(".hhhhh"+i_btn).addEventListener("click", () => {
//         console.log(document.querySelector("#btn-content"+i_btn).value);
//       });
      
     
//     })
//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems();
// }

// // 선택 옵션 변경 이벤트 핸들러
// choice.addEventListener("change", function () {
//   selectedValue = choice.value;
//   currentItems = 10; // currentItems 값을 초기화
//   loadItems();
// });



//================================



// //전체, 관광지, 숙박, 음식점, 등....분류해서 리스트로 나열
// const choice = document.querySelector(".choice");   // 소분류(전체, 관광지, 숙박, 음식점, 등....구역)
// let count1 = document.querySelector(".count1");   // 현재 보여주고 있는 상품 갯수 보여주는 곳
// const countval = count1.getAttribute("value");
// console.log("val=", countval);

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems();

// // 아이템 로드 함수
// function loadItems() {
//   let url = "";
    
//   //currentItems = 보여줄 아이템 갯수,  selectedValue = 보여줄 아이템 분류 코드
//   if (selectedValue === "") {
//     // 선택된 옵션이 없을 때 전체 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   } else {
//     // 선택된 옵션에 따라 아이템 url
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=" +
//       selectedValue +
//       "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   }

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("정보 요청 실패");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const item = data.response.body.items.item;
//       let str = "";
//       item.forEach((e) => {
//         str += "<div class='destination' id=" + e.contentid + " type='button'>";
//         str += "<img src=" + e.firstimage2 + ">";
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//           str += " <p>전화번호 : " + e.tel + "</p>";
//         }
//         str +=
//           " <p class='contentid' type='hidden' style='display:none;'>" +
//           e.contentid +
//           "</p>";
//         str += "</div>";
//         str += "</div>";
//       });
//       document.querySelector(".information").innerHTML = str;
//       count1.innerHTML = item.length;  //item 길이로 현재보여주는 갯수 표시
//       document.querySelector(".destination").addEventListener("click", () =>{
//         console.log("확인 ")
//         fetch("http://localhost:8080/travel/details", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(item)})
//         .then(response => response.text())
//         .then((data) => console.log(data))
//         .catch();
//       })
//     })
//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems();
// }

// // 선택 옵션 변경 이벤트 핸들러
// choice.addEventListener("change", function () {
//   selectedValue = choice.value;
//   currentItems = 10; // currentItems 값을 초기화
//   loadItems();
// });

// // + 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", function () {
// //   let numbercheck = document.querySelector(".numbercheck");
//   let currentNumber = parseInt(count1.innerText);

//   let newNumber = currentNumber + 10;

// });

///==========================


// fetch("https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=200&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=O&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("정보 요청 실패");
//     }
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
//     const item = data.response.body.items.item;
//     let str = "";
//     item.forEach(e => {
//         str += "<div class='destination' id=" + e.contentid + " type='button'>";
//         str += "<img src=" + e.firstimage2 + ">";
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//             str += " <p>전화번호 : " + e.tel + "</p>";
//         }
//         str += " <p class='contentid' type='hidden' style='display:none;'>" + e.contentid + "</p>";
//         str += "</div>";
//         str += "</div>";
//     });
//     document.querySelector(".information").innerHTML = str;

// })
// .catch((error) => console.log(error));






// const choice = document.querySelector(".choice");
// const count1 = document.querySelector(".count1");
// const countval = count1.getAttribute("value");
// console.log("val=", countval);

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems();

// // 아이템 로드 함수
// function loadItems() {
//   let url = "";

//   if (selectedValue === "") {
//     // 선택된 옵션이 없을 때 전체 아이템 로드
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   } else {
//     // 선택된 옵션에 따라 아이템 로드
//     url =
//       "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=" +
//       currentItems +
//       "&pageNo=1&MobileOS=WIN&MobileApp=SOL%ED%88%AC%EC%96%B4&_type=json&listYN=Y&arrange=Q&contentTypeId=" +
//       selectedValue +
//       "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";
//   }

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("정보 요청 실패");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const item = data.response.body.items.item;
//       let str = "";
//       item.forEach((e) => {
//         str += "<div class='destination' id=" + e.contentid + " type='button'>";
//         str += "<img src=" + e.firstimage2 + ">";
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//           str += " <p>전화번호 : " + e.tel + "</p>";
//         }
//         str +=
//           " <p class='contentid' >" +
//           e.contentid +
//           "</p>";
//         str +=
//           " <p class='contentid' >" +
//           e.contenttypeid +
//           "</p>";
//         str += "</div>";
//         str += "</div>";
//       });
//       document.querySelector(".information").innerHTML = str;
//       count1.innerHTML = item.length;
//     })

//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems();
// }

// // 선택 옵션 변경 이벤트 핸들러
// choice.addEventListener("change", function () {
//   selectedValue = choice.value;
//   currentItems = 10; // currentItems 값을 초기화
//   loadItems();
// });

// // + 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", function () {
//   let numbercheck = document.querySelector(".numbercheck");
//   let currentNumber = parseInt(numbercheck.innerText);

//   let newNumber = currentNumber + 10;

// });





