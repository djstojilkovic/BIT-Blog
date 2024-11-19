const postCont = document.querySelector(".singlePostInfoContainer");
function getPostInfo(data) {
  let title = document.createElement("h1");
  let divTitle = document.createElement("div");
  let desc = document.createElement("p");
  let descTxt = document.createElement("p");
  let divInfoLeft = document.createElement("div");
  let authoredBy = document.createElement("p");
  let divInfoRight = document.createElement("div");
  let divInfoAll = document.createElement("div");

  title.innerHTML = data.title;
  desc.innerHTML = data.description;
  descTxt.innerHTML = data.text;
  authoredBy.innerHTML = `<h3 class="createdByH3">Created By: </h3> ${data.createdBy}`;

  divTitle.className = "divTitle";
  divInfoLeft.className = "divInfoLeft";
  divInfoRight.className = "divInfoRight";
  divInfoAll.className = "divInfoAll";

  divTitle.append(title);
  divInfoLeft.append(desc, descTxt);
  divInfoRight.append(authoredBy);
  divInfoAll.append(divTitle, divInfoLeft, divInfoRight);
  postCont.append(divInfoAll);
}

window.addEventListener("load", () => {
  let data = JSON.parse(window.localStorage.getItem("showInfo"));
  getPostInfo(data);
});
