const form1 = document.querySelector(".d-flex");
const search = document.querySelector(".form-control");
let inputse = document.querySelector("#inputse");

form1.addEventListener("submit", (e) => {
    e.preventDefault();

    const encodeval = encodeURIComponent(inputse);

    console.log(encodeval);

    //검색 요청
    fetch("https://apis.data.go.kr/B551011/KorService1/searchKeyword1?MobileOS=ETC&MobileApp=sol&keyword=" + encodeval + "&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D")
    .then((response) => {
        if(!response.ok){
            throw new Error("검색 요청 실패");
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
        const item = data.response.body.items.item;
        let str = "";
        item.forEach(e => {
            str += "<div class='destination'>";
            str += "<img src='" + e.firstimage2 + "' alt='" + e.title + "'>";
            str += "<div class='destination-content'>";
            str += "<h2>" + e.title + "</h2>";
            str += "<p>주소 : " + e.addr1 + "</p>";
            if (e.tel) {
                str += " <p>전화번호 : " + e.tel + "</p>";
              }
            str += "</div>";          
            str += "</div>"; 
        });
        document.querySelector(".information").innerHTML = str;
    })
    .catch((error) => console.log(error));

    form1.submit();
})




