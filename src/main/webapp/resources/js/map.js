const tap = document.querySelector("#test1");
const tap2 = document.querySelector("#test2");
const aco1 = document.querySelector("#aco1");
const aco2 = document.querySelector("#aco2");
const aco3 = document.querySelector("#aco3");
const addCode = document.querySelector("#address-code");
const btnAco = document.querySelector("#btn-aco");
const btnFest = document.querySelector("#btn-festival");
const festCode = document.querySelector("#festival-code");
const btnAll = document.querySelector("#btn-all");
const keyword = document.querySelector("#keyword");
const allcode = document.querySelector("#all-code");

//숙박 api
btnAco.addEventListener("click", () => {
  const url =
    "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=100&MobileOS=ETC&MobileApp=APPtest&_type=json&areaCode=" +
    addCode.value +
    "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터 확인");
      }
      return response.json();
    })
    .then((data) => {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 11, // 지도의 확대 레벨
        };

      var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      item = data.response.body.items.item;
      let str = "";

      //지도 마커 배열 생성
      //마커를 표시할 위치와 title 객체 배열입니다
      let positions = [];

      //숙박 api 데이터 포이치
      item.forEach((element) => {
        str += "<ul>";
        str += "<li>" + element.title + "</li>";
        str += "<li>" + element.addr1 + "</li>";
        str += "</ul>";

        //지도 마커 생성 포이치
        let new_marker = {
          title: element.title,
          latlng: new kakao.maps.LatLng(element.mapy, element.mapx),
        };
        positions.push(new_marker);
      });
      aco3.innerHTML = str;
      positions.forEach((item) => {});

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
    })
    .catch((error) => console.log(error));
});

///행사 api
btnFest.addEventListener("click", () => {
  const url =
    "https://apis.data.go.kr/B551011/KorService1/searchFestival1?numOfRows=100&MobileOS=ETC&MobileApp=APPtest&_type=json&eventStartDate=20230701&areaCode=" +
    festCode.value +
    "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터 확인");
      }
      return response.json();
    })
    .then((data) => {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 11, // 지도의 확대 레벨
        };

      var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      item = data.response.body.items.item;
      let str = "";

      //지도 마커 배열 생성
      //마커를 표시할 위치와 title 객체 배열입니다
      let positions = [];

      //숙박 api 데이터 포이치
      item.forEach((element) => {
        str += "<ul>";
        str += "<li>" + element.title + "</li>";
        str += "<li>" + element.addr1 + "</li>";
        str += "</ul>";

        //지도 마커 생성 포이치
        let new_marker = {
          title: element.title,
          latlng: new kakao.maps.LatLng(element.mapy, element.mapx),
        };
        positions.push(new_marker);
      });
      aco2.innerHTML = str;
      positions.forEach((item) => {});

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
    })
    .catch((error) => console.log(error));
});

//검색
btnAll.addEventListener("click", () => {
  let url = "";
  if (allcode.value == "all") {
    url =
      "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=100&MobileOS=ETC&MobileApp=APPtest&_type=json&keyword=" +
      keyword.value +
      "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
  } else {
    url =
      "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=100&MobileOS=ETC&MobileApp=APPtest&_type=json&keyword=" +
      keyword.value +
      "&areaCode=" +
      allcode.value +
      "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
  }
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터 확인");
      }
      return response.json();
    })
    .then((data) => {
      var mapContainer = document.getElementById("map"), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 11, // 지도의 확대 레벨
        };

      var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      item = data.response.body.items.item;
      let str = "";

      //지도 마커 배열 생성
      //마커를 표시할 위치와 title 객체 배열입니다
      let positions = [];

      //숙박 api 데이터 포이치
      item.forEach((element) => {
        str += "<ul>";
        str += "<li>" + element.title + "</li>";
        str += "<li>" + element.addr1 + "</li>";
        str += "</ul>";

        //지도 마커 생성 포이치
        let new_marker = {
          title: element.title,
          latlng: new kakao.maps.LatLng(element.mapy, element.mapx),
        };
        positions.push(new_marker);
      });
      aco1.innerHTML = str;
      positions.forEach((item) => {});

      // 마커 이미지의 이미지 주소입니다
      var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      for (var i = 0; i < positions.length; i++) {
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35);

        // 마커 이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커를 표시할 위치
          title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          image: markerImage, // 마커 이미지
        });
      }
    })
    .catch((error) => console.log(error));
});
