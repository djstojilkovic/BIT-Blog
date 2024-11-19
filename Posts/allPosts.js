const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";
const allPostsContainer = document.querySelector(".allPostsContainer");
const divAll = document.querySelector(".divAll");

window.addEventListener("load", getPosts);

function getPosts() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      loadPosts(data);
    });
}

function loadPosts(data) {
  data.forEach((e) => {
    let title = document.createElement("h1");
    let desc = document.createElement("p");
    let divLeft = document.createElement("div");
    let createdBy = document.createElement("p");
    let divRight = document.createElement("div");
    let divAll = document.createElement("div");

    title.innerHTML = e.title;
    desc.innerHTML = e.description;
    createdBy.innerHTML = `<h3 class="createdByH3">Created By: </h3> ${e.createdBy}`;

    divLeft.className = "divLeft";
    divRight.className = "divRight";
    divAll.className = "divAll";

    divLeft.append(title, desc);
    divRight.append(createdBy);
    divAll.append(divLeft, divRight);
    allPostsContainer.append(divAll);

    divAll.addEventListener("click", () => {
      window.localStorage.removeItem("showInfo");
      window.localStorage.setItem("showInfo", JSON.stringify(e));
      window.location.href = "./singlePost/singlePost.html";
    });
  });
}
