let replyService = (function (){
    function add(reply,callback){
    console.log("add 함수입니다.");

    fetch("/replies/new",{
        method: "post",
        headers: {
            "content-type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
        },
        body: JSON.stringify(reply),
    })
    .then((response) =>{
        if(!response.ok){
            throw new Error("입력 오류")
        }
        return response.text();
    })
    .then((data) =>{
        if(callback){
            callback(data)
        }
    })
    .catch((error) => console.log(error));
}

function listAll(param, callback){
    let contentid = param.contentid;
    let page = param.page;

    fetch("/replies/pages/" + contentid + "/" + page)
    .then((response) =>{
        if(!response.ok){
            throw new Error("리스트 없음");
        }
        return response.json();
    })
    .then((data) => {
        console.log("리스트 개수");
        console.log(data);

        if(callback){
            callback(data.replyCnt, data.list)
        }
    })
    .catch((error) => console.log(error));
}
})