/**
 * 
 */
let str2 = "";
let url = "";
function locData(land){
    url = 
        "https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=100&pageNo=1&MobileOS=ETC&MobileApp=AppTest&areaCode="
        +land+
        "&_type=json&serviceKey=dVc6uZ5KOp94pMCftRbK5zA%2B2EU1SQWrv4kESfpVx4CX5vOZ4D1sKUeX7ewO7gXhXzx6g5t6nz0LFrvS2b1xUA%3D%3D";
    
    console.log(document.getElementById("searchLand").value);
    fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("지역 코드 실패");
        }
        return response.json();
        })
        .then((data) => {
            console.log(data);
            let item = data.response.body.items.item;
            let n=data.response.body.numOfRows
            i = 0;
            str2 += '<option value="">시/군/구 선택</option>';
            item.forEach((data) => {
                if (i < n) {
                    str2 += '<option value="' + data.code + '">' + data.name + '</option>';
                    i+=1;
                }
            });
            document.querySelector("#searchArea").innerHTML = str2;
    
        })
        .catch((error) => console.log(error));
}

document.querySelector("#searchLand").addEventListener("change", (e) =>{
    str2 = "";
    document.querySelector("#searchArea").innerHTML = "";
    let land = document.getElementById("searchLand").value;
    console.log(land);
    locData(land);
})









let str = "";
function showList(){
    const url =
        "https://apis.data.go.kr/B551011/KorService1/searchStay1?numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=O&areaCode="
        +document.getElementById("searchLand").value+
        "&sigunguCode="
        +document.getElementById("searchArea").value+
        "&serviceKey=dVc6uZ5KOp94pMCftRbK5zA%2B2EU1SQWrv4kESfpVx4CX5vOZ4D1sKUeX7ewO7gXhXzx6g5t6nz0LFrvS2b1xUA%3D%3D";

    console.log(url)
    fetch(url)
    .then((response) => {
    if (!response.ok) {
        throw new Error("관광지 요청 실패");
    }
    return response.json();
    })
    .then((data) => {
        console.log(data);
        item = data.response.body.items.item;
        str += '<ul class="other_festival_ul" id="fstvlList">';
        i = 0;
        item.forEach((data) => {
        if (i < 20) {
            str += "<li>";
            str += '<a href="/travel/details?contentId='+data.contentid+'&contenttypeId='+data.contenttypeid+'">';
            str += '<div class="other_festival_img">';
            str += "<img src=" + data.firstimage + ">";
            str += '<div class="sing_area">';
            str += '<div class="blind">문화 관광 축제</div>';
            str += "</div>";
            str += "</div>";
            str += '<div class="other_festival_content">';
            str += "<strong>" + data.title + "</strong>";
            str += '<div class="loc">' + data.addr1 + "</div>";
            str += "</div>";
            str += "</a>";
            str += "</li>";
            i += 1;
        }
        });
        str += "</ul>";
        document.querySelector(".tab_cont_area").innerHTML = str;

    })
    .catch((error) => console.log(error));
};
document.querySelector("#searchArea").addEventListener("change", (e) =>{
    str = "";
    showList();
})
