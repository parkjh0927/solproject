let replyService = (function (){
    function add(dereply,callback){
    console.log("add 함수입니다.");

    fetch("/replies/new",{
        method: "post",
        headers: {
            "content-type": "application/json",
            "X-CSRF-TOKEN": csrfToken,
        },
        body: JSON.stringify(dereply),
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
function displayTime(timeVal){
    const today = new Date();

    let gap = today.getTime() - timeVal;

    let dateObj = new Date(timeVal);

    let str = "";

    if(gap < 1000 * 60 * 60 * 24){
        let hh = dateObj.getHours();
        let mi = dateObj.getMinutes();
        let ss = dateObj.getSeconds();

        return[
            (hh > 9 ? "" : "0") + hh,
            ":",
            (mi > 9 ? "" : "0") + mi,
            ":",
            (ss > 9 ? "" : "0") + ss,
        ].join("");
    }else{
        const yy = dateObj.getFullYear();
        const mm = dateObj.getMonth() + 1;
        const dd = dateObj.getDate();
        return [
            yy,
            "/",
            (mm > 9 ? "" : "0") + mm,
            "/",
            (dd > 9 ? "" : "0") + dd,
        ].join("");
    }
}

function get(rno,callback){
    fetch("/replies/" + rno)
    .then((response) =>{
        if(!response.ok){
            throw new Error("가져올 댓글 없음")
        }
        return response.text();
    })
    .then((data) => {
        if(callback){
            callback(data);
        }
    })
    .catch((error) => console.log(error));
}

function update(dereply, callback){
    fetch("/replies/" + dereply.rno, {
        method: "put",
        headers: {
            "content-Type": "application/json",
            "X-CSRF_TOKEN": csrfToken,
        },
        body: JSON.stringify(dereply),
    })
    .then((response) =>{
        if(!response.ok){
            throw new Error("수정 실패")
        }
        return response.text();
    })
    .then((data) =>{
        if(callback){
            callback(data);
        }
    })
    .catch((error) => console.log(error));
}

function remove(rno, username, callback){
    const reply = {username: username};
    fetch("replies/" + rno,{
        method: "delete",
        headers:{
            "X-CSRF-TOKEN": csrfToken,
            "content-type": "application/json",
        },
        body: JSON.stringify(reply),
    })
    .then((response) =>{
        if(!response.ok){
            throw new Error("삭제 실패")
        }
        return response.text();
    })
    .then((data) =>{
        if(callback){
            callback(data);
        }
    })
    .catch((error) => console.log(error));
}

return {
    add: add,
    listAll: listAll,
    displayTime: displayTime,
    get: get,
    update: update,
    remove: remove,
};
})();