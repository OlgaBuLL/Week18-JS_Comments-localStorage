// let comments = [];

// function finishTask(sender) {
//   sender.parentElement.classList.toggle("done");
// }

function sendComment() {
  let userComment = checkSpam();
  // comments.push(userComment);
  generateComments(userComment);
  // console.log(comments);
  document.getElementById("comment").value = "";
}

function checkSpam() {
  let checkedSpam = document.getElementById("comment").value;

  checkedSpam = checkedSpam.replace(/viagra/gi, "***");
  console.log(checkedSpam);

  checkedSpam = checkedSpam.replace(/xxx/gi, "***");
  console.log(checkedSpam);

  let bitchSpam = checkedSpam.split(" ");

  for (let i = 0; i < bitchSpam.length; i++) {
    if (bitchSpam[i] === "bitch")
      bitchSpam[i] = bitchSpam[i].replace(/i/gi, "*");

    console.log(bitchSpam);
  }
  bitchSpam = bitchSpam.join(" ");
  return bitchSpam;
}

function generateComments(comment) {
  let author = document.getElementById("author").value;
  let picture = document.getElementById("picture").value;
  if (
    localStorage.getItem("name") == null &&
    localStorage.getItem("avatar") == null
  ) {
    localStorage.setItem("name", author);
    localStorage.setItem("avatar", picture);
  }
  // let optionsString = "";
  // for (let comment of comments) {
  // optionsString += `<div><input type="checkbox" onchange="finishTask(this)"><span>${comment}</span><button onchange="deleteComment()">Delete</button></div>`;
  document.getElementById(
    "comments-container"
  ).innerHTML += `<div> <img class="avatar" width=30px height=30px src="${picture}" alt="user Icon"><span class='author'>${author}:  </span><span>${comment}</span><br></div>`;
  // }

  // document.getElementById("comments-container").innerHTML = optionsString;
}

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("name");
  let avatar = localStorage.getItem("avatar");
  if (name !== null && avatar !== null) {
    document.getElementById("author").value = name;
    document.getElementById("picture").value = avatar;
  }
});
