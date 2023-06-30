document.querySelectorAll("#btn-wish").forEach((element) => {
  console.log(element);
  element.addEventListener("click", () => {
    var wishForm = document.querySelector(".wishForm");
    console.log(wishForm);
    wishForm.submit();
  });
});
document.querySelectorAll("#delete-wish").forEach((element) => {
  element.addEventListener("click", () => {
    const contentid = element.parentNode.querySelector(".con1");
    const userid = document.querySelector("#logintest");
    console.log("contentid:", contentid.value);
    console.log("username:", userid.value);
    document.querySelector("#open-modal").click();
    document.querySelector("#btn-conform").addEventListener("click", () => {
      fetch(
        "http://localhost:8080/wish/delete?username=" +
          userid.value +
          "&contentid=" +
          contentid.value
      )
        .then((response) => response.text())
        .then((data) => {
          console.log(data);
          location.reload();
        })
        .catch();
    });
  });
});

// ", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-CSRF-TOKEN": csrfToken,
//     },
//     body: JSON.stringify({ username: userid.value, contentid: contentid.value }),
