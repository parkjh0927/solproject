/**
 *
 */
let title = "";

document.querySelector("#test1").addEventListener("click", () => {
  fetch(
    "https://apis.data.go.kr/B551011/KorService1/searchFestival1?numOfRows=12&pageNo=1&MobileOS=WIN&MobileApp=AppTest&_type=json&listYN=Y&arrange=D&eventStartDate=20230101&serviceKey=XQa%2FASRtG5fdnoXmCcOAnCDgWeQrvUNGpQZLKr10Wa7YyOOZXFTm0sB7i%2FwvFvAUSmuQdj89r5ay%2BfTA7ASTIw%3D%3D"
  )
    .then((response) => {
      if (!response.ok) {
        console.log("확인용");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      item = data.response.body.items.item;
      item.forEach((item1) => {
        console.log(item1.title);
      });
    })
    .catch();
});
