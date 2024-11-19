const SUBS_URL =
  "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions";
window.addEventListener("load", getSubs);

function getSubs() {
  fetch(SUBS_URL)
    .then((response) => response.json())
    .then((data) => {
      showSubs(data);
    });
}
function showSubs(data) {
  data.forEach((e) => {
    console.log(e);
    const div = document.createElement("div");
    if (e.isSubscribed === true) {
      div.className = "subsDiv";
      div.innerHTML = `${e.name}, ${e.email} - `;
      document.querySelector(".divSub").append(div);
    } else {
      div.className = "unsubsDiv";
      div.innerHTML = `${e.name}, ${e.email} +`;
      document.querySelector(".divUnsub").append(div);
    }
    div.style.cursor = "pointer";
    // put metoda za prebacivanje iz subs-a u unsubs-e
    div.addEventListener("click", () => {
      console.log("dasdas");
      fetch(
        `https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions/${e.id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            isSubscribed: !e.isSubscribed,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => console.log(json))
        .then(() => {
          getSubs();
        });
    });
  });
}
