const destination = document.querySelector(".destination");

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



// var defaultImage = "resources/img/prepare.png";

// // ...

// newItems.forEach(function(dto) {
//   var imageSource = dto.firstimage2 ? dto.firstimage2 : defaultImage;
//   var newItemHtml = `
//     <div class="information">
//       <div class="destination" id="${dto.contentid}" type="button">
//         <img src="${imageSource}">
//         <div class="destination-content">
//           <h2>${dto.title}</h2>
//           <p>주소: ${dto.addr1}</p>
//           <p>${dto.tel}</p>
//           <input class="conInput" type="hidden" value="${dto.contentid}">
//           <input class="contyInput" type="hidden" value="${dto.contenttypeid}">
//         </div>
//       </div>
//     </div>
//   `;
//   document.querySelector("main").insertAdjacentHTML("beforeend", newItemHtml);
// });

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems();

// // 아이템 로드 함수
// function loadItems() {
  
//   fetch("https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=100&MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=O&keyword=" + search + "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
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
//         if(e.firstimage2 != ""){
//             str += "<img src=" + e.firstimage2 + ">";
//         }else if(e.firstimage2 == ""){
//             str += "<img src=resouces/img/prepare.png>";
//         }
//         str += "<div class='destination-content'>";
//         str += "<h2>" + e.title + "</h2>";
//         str += " <p>주소 : " + e.addr1 + "</p>";
//         if (e.tel) {
//             str += " <p>전화번호 : " + e.tel + "</p>";
//           }
//           str += "<input class = 'conInput' hidden value='" + e.contentid + "'></input>";
//           str += "<input class = 'contyInput' hidden value='" + e.contenttypeid + "'></input>";
//           str += "</div>";
//           str += "</div>";
//         });
//         str += "<form id='locals' action='http://localhost:8080/travel/details'>";
//         str += "<input hidden id='con1' name='contentId'/>";
//         str += "<input hidden id='con2' name='contenttypeId'/>";
//         str += "<form>";
//         document.querySelector(".information").innerHTML = str;
//         count1.innerHTML = item.length;
//         document.querySelectorAll(".destination").forEach((destination) => {
//           destination.addEventListener("click", () => {
//             const contentId = destination.querySelector(".conInput").value;
//             const contenttypeId = destination.querySelector(".contyInput").value;
//             const con1 = document.querySelector("#con1");
//             const con2 = document.querySelector("#con2");
//             const form = document.querySelector("#locals");
//             con1.value = contentId
//             con2.value = contenttypeId
//             form.submit();
//             console.log(contentId)
//             console.log(contenttypeId)
            
//         });
//         });
//       })
//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems();
// }



//================================

// fetch("https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&keyword=%EC%A7%84%EC%95%88&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
// .then((response) => {
//     if(!response.ok){
//         throw new Error("검색 실패");
//     }
//     return response.json();
// })
// .then((data) => {
//     console.log(data)

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
//           }
//           str += "<input class = 'conInput' hidden value='" + e.contentid + "'></input>";
//           str += "<input class = 'contyInput' hidden value='" + e.contenttypeid + "'></input>";
//           str += "</div>";
//           str += "</div>";
//     });
//     document.querySelector("#nav-home").innerHTML = str;
// })
// .catch((error) => console.log(error));

//=====================================

// 

///======================

// // 전역 변수 선언
// let currentItems = 10; // 처음에 보여지는 아이템 개수
// let selectedValue = ""; // 선택된 옵션 값 초기화

// // 더보기 버튼 클릭 이벤트 핸들러
// document.querySelector(".moresee").addEventListener("click", loadMoreItems);

// // 초기 아이템 로드
// loadItems(encodeval); // Pass the encodeval value here

// // 아이템 로드 함수
// function loadItems(encodeval) { // Add encodeval as a parameter
//   fetch("https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=ETC&MobileApp=sol&_type=json&listYN=Y&arrange=Q&keyword=" + encodeval + "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
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
//             str += " <p>전화번호 : " + e.tel + "</p>";
//           }
//           str += "<input class = 'conInput' hidden value='" + e.contentid + "'></input>";
//           str += "<input class = 'contyInput' hidden value='" + e.contenttypeid + "'></input>";
//           str += "</div>";
//           str += "</div>";
//         });
//         str += "<form id='locals' action='http://localhost:8080/travel/details'>";
//         str += "<input hidden id='con1' name='contentId'/>";
//         str += "<input hidden id='con2' name='contenttypeId'/>";
//         str += "<form>";
//         document.querySelector(".information").innerHTML = str;
//         count1.innerHTML = item.length;
//         document.querySelectorAll(".destination").forEach((destination) => {
//           destination.addEventListener("click", () => {
//             const contentId = destination.querySelector(".conInput").value;
//             const contenttypeId = destination.querySelector(".contyInput").value;
//             const con1 = document.querySelector("#con1");
//             const con2 = document.querySelector("#con2");
//             const form = document.querySelector("#locals");
//             con1.value = contentId
//             con2.value = contenttypeId
//             form.submit();
//             console.log(contentId)
//             console.log(contenttypeId)
//           });
//         });
//     })
//     .catch((error) => console.log(error));
// }

// // 더보기 버튼 클릭 이벤트 핸들러
// function loadMoreItems() {
//   currentItems += 10; // 보여지는 아이템 개수에 10 추가
//   loadItems(encodeval); // Pass the encodeval value here
// }
