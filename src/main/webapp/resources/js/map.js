const sel_fest = document.querySelector("#search-festival");
const sel_bed = document.querySelector("#search-bed");
const sel_keyword = document.querySelector("#search-keyword");
const sel_option = document.querySelector("#search-option");
const sel_addr = document.querySelector("#address-select");
//지역 select
const addr_code = document.querySelector("#address-code");
//타입 select
const type_code = document.querySelector("#type-code");
//검색창
const search_text = document.querySelector("#search-text");
//검색버튼
const search_btn = document.querySelector("#search-btn");
//달력 선택
const sel_date = document.querySelector("#select-date");

let search_value = "";
sel_fest.addEventListener("click", () => {
  addr_code.removeAttribute("hidden");
  search_btn.removeAttribute("hidden");
  search_text.setAttribute("hidden", "");
  type_code.setAttribute("hidden", "");
  sel_date.removeAttribute("hidden");
  sel_option.innerHTML = "행사 조회";
  search_value = "행사";
  sel_addr.innerHTML = "행사지역";
});
sel_bed.addEventListener("click", () => {
  addr_code.removeAttribute("hidden");
  search_btn.removeAttribute("hidden");
  search_text.setAttribute("hidden", "");
  type_code.setAttribute("hidden", "");
  sel_date.setAttribute("hidden", "");
  sel_option.innerHTML = "숙박시설 조회";
  search_value = "숙박";
  sel_addr.innerHTML = "숙박지역";
});
sel_keyword.addEventListener("click", () => {
  addr_code.removeAttribute("hidden");
  search_text.removeAttribute("hidden");
  type_code.removeAttribute("hidden");
  search_btn.removeAttribute("hidden");
  sel_date.setAttribute("hidden", "");
  sel_option.innerHTML = "조회 타입";
  sel_addr.innerHTML = "검색지역";
  search_value = "검색";
});
// 사이드바 변수
let sideNum = 0;
// 마커 아이콘 객체
const icon_1 = document.querySelector("#icon-1");
const icon_2 = document.querySelector("#icon-2");
const icon_3 = document.querySelector("#icon-3");
const icon_4 = document.querySelector("#icon-4");
const icon_5 = document.querySelector("#icon-5");
const icon_6 = document.querySelector("#icon-6");
const icon_7 = document.querySelector("#icon-7");

// 검색버튼클릭     검색버튼클릭     검색버튼클릭     검색버튼클릭     검색버튼클릭
// 검색버튼클릭     검색버튼클릭     검색버튼클릭     검색버튼클릭     검색버튼클릭
search_btn.addEventListener("click", () => {
  // 지도 생성
  map = new kakao.maps.Map(document.getElementById("map"), {
    center: new kakao.maps.LatLng(36.2683, 127.6358),
    level: 13,
  });
  // 클러스터 생성
  const clusterer = new kakao.maps.MarkerClusterer({
    map: map,
    averageCenter: true,
    minLevel: 10,
  });
  // url 생성 시작-----------------------------------------------시작
  let url = "";
  if (search_value == "행사") {
    if (addr_code.value == "null") {
      alert("검색지역을 확인해주세요.");
      return;
    } else if (sel_date.value == "") {
      alert("행사시작일을 입력해주세요.");
      return;
    } else if (addr_code.value == "all") {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchFestival1?" +
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&" +
        "eventStartDate=" +
        sel_date.value.replace(/-/g, "") +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    } else {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchFestival1?" +
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&" +
        "eventStartDate=" +
        sel_date.value.replace(/-/g, "") +
        "&areaCode=" +
        addr_code.value +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    }
  } else if (search_value == "숙박") {
    if (addr_code.value == "null") {
      alert("검색지역을 확인해주세요.");
      return;
    } else if (addr_code.value == "all") {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchStay1?" +
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&" +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    } else {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchStay1?" +
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&" +
        "areaCode=" +
        addr_code.value +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    }
  } else if (search_value == "검색") {
    if (addr_code.value == "null") {
      alert("검색지역을 확인해주세요.");
      return;
    } else if (type_code.value == "null") {
      alert("검색타입을 확인해주세요.");
      return;
    } else if (search_text.value == "") {
      alert("검색어를 입력해주세요.");
      return;
    } else if (addr_code.value == "all" && type_code.value == "all") {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?" +
        //api 호출량
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&keyword=" +
        encodeURIComponent(search_text.value) +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    } else if (addr_code.value == "all") {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?" +
        //api 호출량
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&keyword=" +
        encodeURIComponent(search_text.value) +
        "&contentTypeId=" +
        type_code.value +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    } else if (type_code.value == "all") {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?" +
        //api 호출량
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&keyword=" +
        encodeURIComponent(search_text.value) +
        "&areaCode=" +
        addr_code.value +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    } else {
      url =
        "https://apis.data.go.kr/B551011/KorService1/searchKeyword1?" +
        //api 호출량
        "numOfRows=" +
        9999 +
        "&MobileOS=ETC&MobileApp=APPtest&_type=json&keyword=" +
        encodeURIComponent(search_text.value) +
        "&contentTypeId=" +
        type_code.value +
        "&areaCode=" +
        addr_code.value +
        "&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D";
    }
  }
  // url 생성 종료-----------------------------------------------종료
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        console.log("데이터 확인");
      }
      return response.json();
    })
    .then((data) => {
      item = data.response.body.items.item;
      if (data.response.body.items == "") {
        alert("검색결과가 없습니다.");
        return;
      }
      //지도 아이콘 전부 숨기기
      icon_1.setAttribute("hidden", "");
      icon_2.setAttribute("hidden", "");
      icon_3.setAttribute("hidden", "");
      icon_4.setAttribute("hidden", "");
      icon_5.setAttribute("hidden", "");
      icon_6.setAttribute("hidden", "");
      icon_7.setAttribute("hidden", "");
      // 지도 생성

      function createMarker(position, image, firstimage, title, contentid) {
        var marker = new kakao.maps.Marker({
          position: position,
          image: image,
        });
        marker.firstimage = firstimage;
        marker.title = title;
        marker.contentid = contentid;
        return marker;
      }
      // 인포윈도우 생성
      var infowindow = new kakao.maps.InfoWindow();
      // 마커 아이콘 배열 생성
      var templeMarkers = []; // 관광지
      var cultureMarkers = []; // 문화시설
      var festivalMarkers = []; // 행사
      var sportsMarkers = []; // 레포츠
      var homeMarkers = []; // 숙박
      var shopMarkers = []; // 쇼핑
      var foodMarkers = []; // 음식점

      //마커 포이치//마커 포이치//마커 포이치//마커 포이치//마커 포이치//마커 포이치//마커 포이치
      clusterer.clear();
      //사이드바 내용
      var sideCon = "";

      item.forEach((position) => {
        var sideContentImage = position.firstimage
          ? "<img src='" + position.firstimage + "' style='height:70px; width:70px;'/>"
          : "";
        // 사이드바내용
        var sideTitle =
          position.title.indexOf("[") !== -1
            ? position.title.split("[")[0].trim()
            : position.title.trim();
        var realSideTitle =
          sideTitle.indexOf("(") !== -1 ? sideTitle.split("(")[0].trim() : sideTitle.trim();
        sideCon +=
          "<li type='button' class='side-li'>" +
          "<input class = 'side-li-value' hidden value='" +
          position.contentid +
          "'>" +
          sideContentImage +
          "<span class = 'side-span'>" +
          realSideTitle +
          "</span>" +
          "</li>";
        // 포이치안에서 마커 생성
        var lat = position.mapy;
        var lng = position.mapx;
        var contenttypeid = position.contenttypeid;

        var markerImage;
        var imageSize = new kakao.maps.Size(20, 35);

        if (contenttypeid == 12) {
          markerImage = new kakao.maps.MarkerImage("../resources/images/map/관광지.png", imageSize);
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          templeMarkers.push(marker);
          icon_1.removeAttribute("hidden");
        } else if (contenttypeid == 14) {
          markerImage = new kakao.maps.MarkerImage(
            "../resources/images/map/문화시설.png",
            imageSize
          );
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          cultureMarkers.push(marker);
          icon_2.removeAttribute("hidden");
        } else if (contenttypeid == 15) {
          markerImage = new kakao.maps.MarkerImage("../resources/images/map/행사.png", imageSize);
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          festivalMarkers.push(marker);
          icon_3.removeAttribute("hidden");
        } else if (contenttypeid == 28) {
          markerImage = new kakao.maps.MarkerImage("../resources/images/map/레포츠.png", imageSize);
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          sportsMarkers.push(marker);
          icon_4.removeAttribute("hidden");
        } else if (contenttypeid == 32) {
          markerImage = new kakao.maps.MarkerImage("../resources/images/map/숙박.png", imageSize);
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          homeMarkers.push(marker);
          icon_5.removeAttribute("hidden");
        } else if (contenttypeid == 38) {
          markerImage = new kakao.maps.MarkerImage("../resources/images/map/쇼핑.png", imageSize);
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          shopMarkers.push(marker);
          icon_6.removeAttribute("hidden");
        } else if (contenttypeid == 39) {
          markerImage = new kakao.maps.MarkerImage("../resources/images/map/음식점.png", imageSize);
          var marker = createMarker(
            new kakao.maps.LatLng(lat, lng),
            markerImage,
            position.firstimage,
            position.title,
            position.contentid
          );
          foodMarkers.push(marker);
          icon_7.removeAttribute("hidden");
        }
      });
      // 사이드바 변수 추가
      sideNum = 1;
      //마커 포이치 종료
      clusterer.addMarkers(templeMarkers);
      clusterer.addMarkers(cultureMarkers);
      clusterer.addMarkers(festivalMarkers);
      clusterer.addMarkers(sportsMarkers);
      clusterer.addMarkers(homeMarkers);
      clusterer.addMarkers(shopMarkers);
      clusterer.addMarkers(foodMarkers);
      // 아이콘 클릭 이벤트
      icon_1.addEventListener("click", () => {
        changeMarker("icon1");
        clusterer.addMarkers(templeMarkers);
        clusterer.removeMarkers(cultureMarkers);
        clusterer.removeMarkers(festivalMarkers);
        clusterer.removeMarkers(sportsMarkers);
        clusterer.removeMarkers(homeMarkers);
        clusterer.removeMarkers(shopMarkers);
        clusterer.removeMarkers(foodMarkers);
      });
      icon_2.addEventListener("click", () => {
        changeMarker("icon2");
        clusterer.removeMarkers(templeMarkers);
        clusterer.addMarkers(cultureMarkers);
        clusterer.removeMarkers(festivalMarkers);
        clusterer.removeMarkers(sportsMarkers);
        clusterer.removeMarkers(homeMarkers);
        clusterer.removeMarkers(shopMarkers);
        clusterer.removeMarkers(foodMarkers);
      });
      icon_3.addEventListener("click", () => {
        changeMarker("icon3");
        clusterer.removeMarkers(templeMarkers);
        clusterer.removeMarkers(cultureMarkers);
        clusterer.addMarkers(festivalMarkers);
        clusterer.removeMarkers(sportsMarkers);
        clusterer.removeMarkers(homeMarkers);
        clusterer.removeMarkers(shopMarkers);
        clusterer.removeMarkers(foodMarkers);
      });
      icon_4.addEventListener("click", () => {
        changeMarker("icon4");
        clusterer.removeMarkers(templeMarkers);
        clusterer.removeMarkers(cultureMarkers);
        clusterer.removeMarkers(festivalMarkers);
        clusterer.addMarkers(sportsMarkers);
        clusterer.removeMarkers(homeMarkers);
        clusterer.removeMarkers(shopMarkers);
        clusterer.removeMarkers(foodMarkers);
      });
      icon_5.addEventListener("click", () => {
        changeMarker("icon5");
        clusterer.removeMarkers(templeMarkers);
        clusterer.removeMarkers(cultureMarkers);
        clusterer.removeMarkers(festivalMarkers);
        clusterer.removeMarkers(sportsMarkers);
        clusterer.addMarkers(homeMarkers);
        clusterer.removeMarkers(shopMarkers);
        clusterer.removeMarkers(foodMarkers);
      });
      icon_6.addEventListener("click", () => {
        changeMarker("icon6");
        clusterer.removeMarkers(templeMarkers);
        clusterer.removeMarkers(cultureMarkers);
        clusterer.removeMarkers(festivalMarkers);
        clusterer.removeMarkers(sportsMarkers);
        clusterer.removeMarkers(homeMarkers);
        clusterer.addMarkers(shopMarkers);
        clusterer.removeMarkers(foodMarkers);
      });
      icon_7.addEventListener("click", () => {
        changeMarker("icon7");
        clusterer.removeMarkers(templeMarkers);
        clusterer.removeMarkers(cultureMarkers);
        clusterer.removeMarkers(festivalMarkers);
        clusterer.removeMarkers(sportsMarkers);
        clusterer.removeMarkers(homeMarkers);
        clusterer.removeMarkers(shopMarkers);
        clusterer.addMarkers(foodMarkers);
      });
      // --------시작-----------사이드바---------사이드바-------------사이드바---시작
      const toggleButton = document.querySelector("#toggleSidebar");
      const sidebar = document.querySelector(".left-side-bar");
      const sidemap = document.querySelector("#map");
      var sideContent = document.querySelector("#side-content");

      if (toggleButton.innerHTML != "결과목록 숨기기") {
        toggleButton.click();
      }
      setTimeout(() => {
        if (toggleButton.innerHTML != "결과목록 숨기기") {
          toggleButton.click();
        }
      }, 500);

      sideContent.innerHTML = sideCon;
      if (sideNum == 1) {
        toggleButton.addEventListener("click", () => {
          toggleButton.innerHTML =
            sidebar.style.left === "0px" ? "결과목록보기" : "결과목록 숨기기";
          sidebar.style.left = sidebar.style.left === "0px" ? "-400px" : "0px";
        });
        sidemap.addEventListener("click", (event) => {
          if (!sidebar.contains(event.target) && sidebar.style.left === "0px") {
            toggleButton.innerHTML = "결과목록보기";
            sidebar.style.left = "-400px";
          }
        });
      } else {
        toggleButton.addEventListener("click", () => {
          alert("결과목록이 없습니다.");
        });
      }
      document.querySelectorAll(".side-li").forEach((sideLi) => {
        sideLi.addEventListener("mouseover", () => {
          sideLi.style.backgroundColor = "antiquewhite";
        });
        sideLi.addEventListener("mouseout", () => {
          sideLi.style.backgroundColor = "#F8F9FA";
        });
        sideLi.addEventListener("click", (event) => {
          const sideValue = event.target.querySelector(".side-li-value").value;
          console.log(sideValue);

          clusterer.getMarkers().forEach((element) => {
            if (sideValue == element.contentid) {
              const position = element.getPosition();
              const lat = position.getLat();
              const lng = position.getLng();
              // const map = clusterer.getMap();

              // 중심 좌표 변경
              map.setCenter(new kakao.maps.LatLng(lat, lng));
              map.setLevel(4);
              console.log(element);
              kakao.maps.event.trigger(element, "click");
            }
          });
        });
      });
      // --------종료-----------사이드바---------사이드바-------------사이드바---종료
      // 마커 클릭 이벤트-------------------------// 마커 클릭 이벤트-------------------------
      //클릭된 마커 담을 변수
      var selectedMarker = null;
      var testMarker = null;
      clusterer.getMarkers().forEach((element) => {
        var normalImage = new kakao.maps.MarkerImage(element.T.Yj, new kakao.maps.Size(20, 35));
        var overImage = new kakao.maps.MarkerImage(element.T.Yj, new kakao.maps.Size(35, 50));
        var clickImage = new kakao.maps.MarkerImage(
          "../resources/images/map/클릭마커.png",
          new kakao.maps.Size(35, 50)
        );
        var clickTitle = "";
        kakao.maps.event.addListener(element, "mouseover", function () {
          //오버마우스 마커이미지변경

          if (!selectedMarker || selectedMarker !== element) {
            element.setImage(overImage);
          }
          // 인포윈도우에 표시될 이미지의 높이를 400으로 제한
          var image = new Image();
          image.onload = function () {
            var imgHeight = image.height > 250 ? 250 : image.height;
            var Title =
              element.title.indexOf("[") !== -1
                ? element.title.split("[")[0].trim()
                : element.title.trim();
            var realTitle = Title.indexOf("(") !== -1 ? Title.split("(")[0].trim() : Title.trim();
            clickTitle = realTitle;
            var iwContent = element.firstimage
              ? "<div style='overflow:visible; padding-bottom:5px; padding-top:5px;  text-align: center;'>" +
                realTitle +
                "</div><img src='" +
                element.firstimage +
                "' style='height:" +
                imgHeight +
                "px;width:auto;'/>"
              : "<div style='overflow:visible; text-align: center;'>" +
                realTitle +
                "</div><img src='../resources/img/prepare.png' style='height:250px;width:auto;'/>";
            

            infowindow.setContent(iwContent);
            infowindow.open(map, element);
          };
          image.src = element.firstimage;
        });

        kakao.maps.event.addListener(element, "mouseout", function () {
          infowindow.close();
          //아웃마우스 마커이미지변경
          if (!selectedMarker || selectedMarker !== element) {
            element.setImage(normalImage);
          }
        });
        // 마커 클릭 이벤트
        kakao.maps.event.addListener(element, "click", function () {
          testMarker = element;
          setTimeout(() => {
            // 클릭된 마커 이미지 변경
            if (!selectedMarker || selectedMarker !== element) {
              // 클릭된 마커 객체가 null이 아니면
              // 클릭된 마커의 이미지를 기본 이미지로 변경하고
              !!selectedMarker && selectedMarker.setImage(testMarker.getImage());

              // 현재 클릭된 마커의 이미지는 클릭 이미지로 변경합니다
              element.setImage(clickImage);
            }
            selectedMarker = element;

            fetch(
              "https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ETC&MobileApp=test&_type=json&contentId=" +
                this.contentid +
                "&overviewYN=Y&serviceKey=KPX00nbUJjy6lFKETU%2FymNP%2BKbcHYN13m5Scu%2Fm6zQ1w2Fh1aiA6Xp9w8Qghnx7nyiOolBhGricu%2BT5es2t8%2FQ%3D%3D"
            )
              .then((response) => response.json())
              .then((data) => {
                var image = new Image();
                image.src = this.firstimage;
                var imgHeight = image.height > 250 ? 250 : image.height;
                document.querySelector("#exampleModalLabel").innerHTML = clickTitle;
                modal_content = this.firstimage
                  ? "<img src='" +
                    this.firstimage +
                    "' style='height:" +
                    imgHeight +
                    "px;width:auto;'/>"
                  : "<img src='../resources/img/prepare.png' style='height:100px;width:auto;'/>";
                modal_content += "<div>" + data.response.body.items.item[0].overview + "</div>";
                document.querySelector("#modal-content").innerHTML = modal_content;
                document.querySelector("#btn-modal").click();
              })
              .catch((error) => console.log(error));
          }, 0.5);
        });
      });
    })
    .catch((error) => console.log(error));
});

// 지도구석 마커아이콘 클릭 이벤트
function changeMarker(type) {
  // icon1이 클릭됐을 때
  if (type === "icon1") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_1.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_6.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_7.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (type === "icon2") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_2.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_6.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_7.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (type === "icon3") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_3.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_6.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_7.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (type === "icon4") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_4.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_6.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_7.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (type === "icon5") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_5.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_6.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_7.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (type === "icon6") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_6.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_7.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else if (type === "icon7") {
    // 선택된 아이콘을 선택된 스타일로 변경하고
    icon_7.style.backgroundColor = "white";
    // 나머지는 선택되지 않은 스타일로 바꿉니다
    icon_2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_3.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_4.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_5.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_6.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    icon_1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  }
}
