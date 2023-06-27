//상세 정보 제공 페이지의 상단부분(이름, 사진, 개요)정보 불러오기
const urlParams = new URLSearchParams(window.location.search);

// 특정 매개변수 값 가져오기
const contenttypeid = urlParams.get("contenttypeId");
const contentid = urlParams.get("contentId");

let url =
  "https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" +
  contentid +
  "&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("상세정보 요청 실패");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const item = data.response.body.items.item;
    let str = "";
    item.forEach((e) => {
      str += "<header class='top'>";
      str += "<h1>" + e.title + "</h1>";
      str += "</header>";
      str += "<main>";
      str += "<div class='information'>";
      str += "<div class='destination'>";
      str += "<img src=" + e.firstimage + ">";
      str += "</div>";
      str += "<div class='destination'>";
      str += "<div class='destination-content'>";
      str += "<h2>상세정보 </h2>";
      str += "</div>";
      str += "</div>";
      str += "<div class='destination'>";
      str += "<div class='destination-content'>";
      str += "<p style='font-size: 20px'>" + e.overview + "</p>";
      str += "</div>";
      str += "</div>";
      str += "</div>";
    });
    document.querySelector(".commons").innerHTML = str;
    console.log("typeinputValue=", typeinputValue);
  })
  .catch((error) => console.log(error));

if(contenttypeid == 32){
    //숙박 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch(
      "https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" +
        contentid +
        "&contentTypeId=" +
        contenttypeid +
        "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("소개정보 요청 실패");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const item = data.response.body.items.item;
        let str = "";
        item.forEach((e) => {
          str += "<ul>";
          if (e.infocenterlodging) {
            str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.infocenterlodging + "</span></li>";
          }
          if (e.reservationurl) {
            str +=
              "<li><strong>홈페이지</strong><span><a href=" + e.reservationurl + ">" + e.reservationurl + "</a></li>";
          }
          if (e.parkinglodging) {
            str += "<li><strong>주차</strong><span>" + e.parkinglodging + "</span></li>";
          }
          if (e.checkintime) {
            str += "<li><strong>입실시간</strong><span>" + e.checkintime + "</span></li>";
          }
          if (e.checkouttime) {
            str += "<li><strong>퇴실시간</strong><span>" + e.checkouttime + "</span></li>";
          }
          if (e.roomcount) {
            str += "<li><strong>객실수</strong><span>" + e.roomcount + "</span></li>";
          }
          if (e.accomcountlodging) {
            str += "<li><strong>수용인원</strong><span>" + e.accomcountlodging + "</span></li>";
          }
          if (e.chkcooking) {
            str += "<li><strong>객실내취사여부</strong><span>" + e.chkcooking + "</span></li>";
          }
          if (e.seminar) {
            str += "<li><strong>세미나실여부</strong><span>" + e.seminar + "</span></li>";
          }
          if (e.refundregulation) {
            str += "<li><strong>환불규정</strong><span>" + e.refundregulation + "</span></li>";
          }
          str += "</ul>";
        });
        document.querySelector(".inr").innerHTML = str;
      })
      .catch((error) => console.log(error));
}else if(contenttypeid == 12){
    //관광지 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" + contentid+ "&contentTypeId=12&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response)=>{
      if(!response.ok){
          throw new Error("소개정보 요청 실패")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      const item = data.response.body.items.item;
      let str = "";
      item.forEach(e => {
          str += "<ul>"
          if (e.expguide) {
            str += "<li><strong>체험 안내</strong><span class='mo'>" + e.expguide + "</span></li>";
          }
          if (e.expagerange) {
            str += "<li><strong>체험가능 연령</strong><span>" + e.expagerange + "</span></li>";
          }
          if (e.usetime) {
            str += "<li><strong>이용시간</strong><span>" + e.usetime + "</span></li>";
          }
          if (e.restdate) {
            str += "<li><strong>쉬는날</strong><span>" + e.restdate + "</span></li>";
          }
          if (e.parking) {
            str += "<li><strong>주차 시설</strong><span>" + e.parking + "</span></li>";
          }
          if (e.chkbabycarriage) {
            str += "<li><strong>유모차 대여 정보</strong><span>" + e.chkbabycarriage + "</span></li>";
          }
          if (e.chkpet) {
            str += "<li><strong>애완동물 동반가능 정보</strong><span>" + e.chkpet + "</span></li>";
          }
          str += "</ul>";
      });
      document.querySelector(".inr").innerHTML = str;
    })
    .catch((error) => console.log(error));
}else if(contenttypeid == 14){
    //문화시설 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" + contentid+ "&contentTypeId=14&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response)=>{
      if(!response.ok){
          throw new Error("소개정보 요청 실패")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      const item = data.response.body.items.item;
      let str = "";
      item.forEach(e => {
          str += "<ul>"
          if (e.infocenterculture) {
            str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.infocenterculture + "</span></li>";
          }
          if (e.restdateculture) {
            str += "<li><strong>쉬는날</strong><span>" + e.restdateculture + "</span></li>";
          }
          if (e.usefee) {
            str += "<li><strong>이용요금</strong><span>" + e.usefee + "</span></li>";
          }
          if (e.usetimeculture) {
            str += "<li><strong>이용시간</strong><span>" + e.usetimeculture + "</span></li>";
          }
          if (e.spendtime) {
            str += "<li><strong>관람소요 시간</strong><span>" + e.spendtime + "</span></li>";
          }
          if (e.parkingculture) {
            str += "<li><strong>주차시설</strong><span>" + e.parkingculture + "</span></li>";
          }
          if (e.parkingfee) {
            str += "<li><strong>주차요금</strong><span>" + e.parkingfee + "</span></li>";
          }
          if (e.chkbabycarriageculture) {
            str += "<li><strong>유모차 대여 정보</strong><span>" + e.chkbabycarriageculture + "</span></li>";
          }
          if (e.chkpetculture) {
            str += "<li><strong>애완동물 동반가능 정보</strong><span>" + e.chkpetculture + "</span></li>";
          }
          str += "</ul>";
      });
      document.querySelector(".inr").innerHTML = str;
    })
    .catch((error) => console.log(error));
}else if(contenttypeid == 15){
    //행사, 공연, 축제 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" + contentid+ "&contentTypeId=15&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response)=>{
      if(!response.ok){
          throw new Error("소개정보 요청 실패")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      const item = data.response.body.items.item;
      let str = "";
      item.forEach(e => {
          str += "<ul>"
          if (e.sponsor1tel) {
            str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.sponsor1tel + "</span></li>";
          }
          if (e.eventplace) {
            str += "<li><strong>행사 장소</strong><span>" + e.eventplace + "</span></li>";
          }
          if (e.placeinfo) {
            str += "<li><strong>행사장 위치 안내</strong><span>" + e.placeinfo + "</span></li>";
          }
          if (e.eventstartdate) {
            str += "<li><strong>행사 시작일</strong><span>" + e.eventstartdate + "</span></li>";
          }
          if (e.eventenddate) {
            str += "<li><strong>행사 종료일</strong><span>" + e.eventenddate + "</span></li>";
          }
          if (e.program) {
            str += "<li><strong>행사 프로그램</strong><span>" + e.program + "</span></li>";
          }
          if (e.agelimit) {
            str += "<li><strong>관람가능 연령</strong><span>" + e.agelimit + "</span></li>";
          }
          if (e.playtime) {
            str += "<li><strong>공연 시간</strong><span>" + e.playtime + "</span></li>";
          }
          if (e.spendtimefestival) {
            str += "<li><strong>관람소요 시간</strong><span>" + e.spendtimefestival + "</span></li>";
          }
          if (e.eventhomepage) {
            str += "<li><strong>행사 홈페이지</strong><span><a href='" + e.eventhomepage + "'>" + e.eventhomepage + "</a></span></li>";
          }
          if (e.usetimefestival) {
            str += "<li><strong>이용 요금</strong><span>" + e.usetimefestival + "</span></li>";
          }
          if (e.bookingplace) {
            str += "<li><strong>예매처</strong><span>" + e.bookingplace + "</span></li>";
          }
          str += "</ul>";
      });
      document.querySelector(".inr").innerHTML = str;
    })
    .catch((error) => console.log(error));
}else if(contenttypeid == 28){
    //레포츠 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" + contentid+ "&contentTypeId=28&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response)=>{
      if(!response.ok){
          throw new Error("소개정보 요청 실패")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      const item = data.response.body.items.item;
      let str = "";
      item.forEach(e => {
          str += "<ul>"
          if (e.infocenterleports) {
            str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.infocenterleports + "</span></li>";
          }
          if (e.expagerangeleports) {
            str += "<li><strong>체험가능 연령</strong><span>" + e.expagerangeleports + "</span></li>";
          }
          if (e.openperiod) {
            str += "<li><strong>오픈 시간</strong><span>" + e.openperiod + "</span></li>";
          }
          if (e.usetimeleports) {
            str += "<li><strong>이용시간</strong><span>" + e.usetimeleports + "</span></li>";
          }
          if (e.restdateleports) {
            str += "<li><strong>쉬는날</strong><span>" + e.restdateleports + "</span></li>";
          }
          if (e.reservation) {
            str += "<li><strong>예약안내</strong><span>" + e.reservation + "</span></li>";
          }
          if (e.usefeeleports) {
            str += "<li><strong>입장료</strong><span>" + e.usefeeleports + "</span></li>";
          }
          if (e.parkingleports) {
            str += "<li><strong>주차시설</strong><span>" + e.parkingleports + "</span></li>";
          }
          if (e.parkingfeeleports) {
            str += "<li><strong>주차요금</strong><span>" + e.parkingfeeleports + "</span></li>";
          }
          if (e.chkbabycarriageleports) {
            str += "<li><strong>유모차 대여 정보</strong><span>" + e.chkbabycarriageleports + "</span></li>";
          }
          if (e.chkpetleports) {
            str += "<li><strong>애완동물 동반가능 정보</strong><span>" + e.chkpetleports + "</span></li>";
          }
          str += "</ul>";
      });
      document.querySelector(".inr").innerHTML = str;
    })
    .catch((error) => console.log(error));
}else if(contenttypeid == 38){
    //쇼핑 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" + contentid+ "&contentTypeId=38&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response)=>{
      if(!response.ok){
          throw new Error("소개정보 요청 실패")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      const item = data.response.body.items.item;
      let str = "";
      item.forEach(e => {
          str += "<ul>"
          if (e.infocentershopping) {
            str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.infocentershopping + "</span></li>";
          }
          if (e.opendateshopping) {
            str += "<li><strong>개장일</strong><span>" + e.opendateshopping + "</span></li>";
          }
          if (e.fairday) {
            str += "<li><strong>장서는 날</strong><span>" + e.fairday + "</span></li>";
          }
          if (e.opentime) {
            str += "<li><strong>영업시간</strong><span>" + e.opentime + "</span></li>";
          }
          if (e.restdateshopping) {
            str += "<li><strong>쉬는날</strong><span>" + e.restdateshopping + "</span></li>";
          }
          if (e.parkingshopping) {
            str += "<li><strong>주차시설</strong><span>" + e.parkingshopping + "</span></li>";
          }
          if (e.chkbabycarriageshopping) {
            str += "<li><strong>유모차 대여 정보</strong><span>" + e.chkbabycarriageshopping + "</span></li>";
          }
          if (e.chkpetshopping) {
            str += "<li><strong>애완동물 동반가능 정보</strong><span>" + e.chkpetshopping + "</span></li>";
          }
          str += "</ul>";
      });
      document.querySelector(".inr").innerHTML = str;
    })
    .catch((error) => console.log(error));
}else if(contenttypeid == 39){
    //음식점 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
    fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=" + contentid+ "&contentTypeId=39&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response)=>{
      if(!response.ok){
          throw new Error("소개정보 요청 실패")
      }
      return response.json();
    })
    .then((data)=>{
      console.log(data);
      const item = data.response.body.items.item;
      let str = "";
      item.forEach(e => {
          str += "<ul>"
          if (e.infocenterfood) {
            str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.infocenterfood + "</span></li>";
          }
          if (e.reservationfood) {
            str += "<li><strong>예약 안내</strong><span>" + e.reservationfood + "</span></li>";
          }
          if (e.opentimefood) {
            str += "<li><strong>영업 시간</strong><span>" + e.opentimefood + "</span></li>";
          }
          if (e.restdatefood) {
            str += "<li><strong>쉬는날</strong><span>" + e.restdatefood + "</span></li>";
          }
          if (e.packing) {
            str += "<li><strong>포장 가능 여부</strong><span>" + e.packing + "</span></li>";
          }
          if (e.parkingfood) {
            str += "<li><strong>주차시설</strong><span>" + e.parkingfood + "</span></li>";
          }
          if (e.kidsfacility) {
            str += "<li><strong>어린이 놀이방 여부</strong><span>" + e.kidsfacility + "</span></li>";
          }
          str += "</ul>";
      });
      document.querySelector(".inr").innerHTML = str;
    })
    .catch((error) => console.log(error));
}












//=======================================//

// //상세 정보 제공 페이지의 상단부분(이름, 사진, 개요)정보 불러오기
// let url = "https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=2465071&defaultYN=Y&firstImageYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

// fetch(url)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("상세정보 요청 실패");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     const item = data.response.body.items.item;
//     let str = "";
//     item.forEach(e => {
//         str += "<header class='top'>";
//         str += "<h1>" + e.title + "</h1>";
//         str += "</header>";
//         str += "<main>";
//         str += "<div class='information'>";
//         str += "<div class='destination'>";
//         str += "<img src=" + e.firstimage + ">";
//         str += "</div>";
//         str += "<div class='destination'>";
//         str += "<div class='destination-content'>";
//         str += "<h2>상세정보 </h2>";
//         str += "</div>";
//         str += "</div>";
//         str += "<div class='destination'>";
//         str += "<div class='destination-content'>";
//         str += "<p style='font-size: 20px'>" + e.overview + "</p>";
//         str += "</div>";
//         str += "</div>";
//         str += "</div>";
//     });
//     document.querySelector(".commons").innerHTML = str;
//     console.log("typeinputValue=", typeinputValue)
//   })
//   .catch((error) => console.log(error));


// //숙박 : 상세 정보 제공 페이지의 하단부분(전화번호, 홈페이지, 주차, 등..)정보 불러오기
//   fetch("https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ETC&MobileApp=sol&_type=json&contentId=2465071&contentTypeId=32&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
//   .then((response)=>{
//     if(!response.ok){
//         throw new Error("소개정보 요청 실패")
//     }
//     return response.json();
//   })
//   .then((data)=>{
//     console.log(data);
//     const item = data.response.body.items.item;
//     let str = "";
//     item.forEach(e => {
//         str += "<ul>"
//         str += "<li><strong>문의 및 안내</strong><span class='mo'>" + e.infocenterlodging+ "</li>";
//         str += "<li><strong>홈페이지</strong><span><a href=" + e.reservationurl + ">" + e.reservationurl + "</a></li>";
//         str += "<li><strong>주차</strong><span>" + e.parkinglodging + "</span></li>";
//         str += "<li><strong>입실시간</strong><span>" + e.checkintime + "</span></li>";
//         str += "<li><strong>퇴실시간</strong><span>" + e.checkouttime + "</span></li>";
//         str += "<li><strong>객실수</strong><span>" + e.roomcount+ "</span></li>";
//         str += "<li><strong>수용인원</strong><span>" + e.accomcountlodging+ "</span></li>";
//         str += "<li><strong>객실내취사여부</strong><span>" + e.chkcooking + "</span></li>";
//         str += "<li><strong>세미나실여부</strong><span>" + e.seminar+ "</span></li>";
//         str += "<li><strong>환불규정</strong><span>" + e.refundregulation+ "</span></li>";
//         str += "</ul>";
//     });
//     document.querySelector(".inr").innerHTML = str;
//   })
//   .catch()