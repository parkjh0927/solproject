fetch()
.then((response) => {
    if(!response.ok){
        throw new Error("검색 실패");
    }
    return response.json();
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error));