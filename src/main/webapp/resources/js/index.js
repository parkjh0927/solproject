///관광지 검색 URL
const url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?MobileOS=ETC&MobileApp=sol%ED%88%AC%EC%96%B4&_type=json&listYN=Y&serviceKey=d%2FV%2BXJ2uRRmx8fi1ZLRNYKAIGNw5ZGfsEJvUhgnWEU%2FSTHfhq5E7aMU8BNrPSbm0EzohYFuTUbQ8InQMNB6kaw%3D%3D";

//관관지 검색 지역
const travelall = document.querySelector("#travelall");
const seoul = document.querySelector("#seoul");
const incheon = document.querySelector("#incheon");
const deajeon = document.querySelector("#deajeon");
const daegu = document.querySelector("#daegu");
const gwangju = document.querySelector("#gwangju");
const busan = document.querySelector("#busan");
const ulsan = document.querySelector("#ulsan");
const gyeonggi = document.querySelector("#gyeonggi");
const gangwon = document.querySelector("#gangwon");
const chungbuk = document.querySelector("#chungbuk");
const chungnam = document.querySelector("#chungnam");
const gb = document.querySelector("#gb");
const gn = document.querySelector("#gn");
const jeju = document.querySelector("#jeju");

//전국 검색했을떄
travelall.addEventListener("click",()=>{

    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error("관광지 요청 실패")
        }
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        item = data.response.body.items.item

        //가져온 정보 forEach
        let str = "";
        item.forEach(e => {
            console.log(e.title)
            console.log(e.firstimage2)

            str += '<ul class="hot">';
			str += '<li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="1" data-cot-id="6d2117db-1bb7-4e65-b60a-4e4109a06b0a" data-content-type="12">';
            str += '<a href="javascript:goCurationContent("6d2117db-1bb7-4e65-b60a-4e4109a06b0a", "경주 오릉", "MAIN_A");">';
            str += '<div class="img_scale">';
            str += '<div class="img_wrap" style="background-image:url('+firstimage2+')"></div>';
            str += '</div>';
            str += '<strong>'+title+'</strong>';
            str += '</a>';
            str += '</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="2" data-cot-id="c124cad3-5585-4d29-b377-5cde73ff807d" data-content-type="12">';
            str += '<a href="javascript:goCurationContent("c124cad3-5585-4d29-b377-5cde73ff807d", "서울 선릉(성종과 정현왕후)과 정릉(중종) [유네스코 세계문화유산]", "MAIN_A");">';
            str += '<div class="img_scale">';
            str += '<div class="img_wrap" style="background-image:url('+firstimage2+')"></div>';
            str += '</div>';
            str += '<strong>'+title+'</strong>';
            str += '</a>';
								
            str += '</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="3" data-cot-id="3aec9d18-3412-404e-87ce-e32893ac0cae" data-content-type="12">';
            str += '<a href="javascript:goCurationContent("3aec9d18-3412-404e-87ce-e32893ac0cae", "필암서원 [유네스코 세계문화유산]", "MAIN_A");">';
            str += '<div class="img_scale">';
            str += '<div class="img_wrap" style="background-image:url('+firstimage2+')"></div>';
            str += '</div>';
            str += '<strong>'+title+'</strong>';
            str += '</a>';
            str += '</li><li onclick="___traceCurationConsume(this)" data-curation-type="HOT" data-page="SITE_MAIN" data-content-order="4" data-cot-id="02e24733-9e25-4f84-9d19-09c68a7a75f5" data-content-type="12">';
            str += '<a href="javascript:goCurationContent("02e24733-9e25-4f84-9d19-09c68a7a75f5", "일산호수공원", "MAIN_A");">'
            str += '<div class="img_scale">';
            str += '<div class="img_wrap" style="background-image:url('+firstimage2+')"></div>';
            str += '</div>';
            str += '<strong>'+title+'</strong>';
            str += '</a>';
            str += '</li>';
            str += '</ul>';
        });
        
    })
    .catch((error) => console.log(error));
});