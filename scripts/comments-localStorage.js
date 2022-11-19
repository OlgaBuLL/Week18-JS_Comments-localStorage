let comments = [];
// let userComment;

function finishTask(sender) {
  sender.parentElement.classList.toggle("done");
}
// function deleteComment() {
//   optionsString = "";
// }

function sendComment() {
  let userComment = checkSpam();
  comments.push(userComment);
  generateComments();
  console.log(comments);
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

function generateComments() {
  let author = document.getElementById("author").value;
  let userIcon = "https://cdn-icons-png.flaticon.com/512/807/807241.png";
  if (localStorage.getItem("name") == null) {
    localStorage.setItem("name", author);
  }
  let optionsString = "";
  for (let comment of comments) {
    // optionsString += `<div><input type="checkbox" onchange="finishTask(this)"><span>${comment}</span><button onchange="deleteComment()">Delete</button></div>`;
    optionsString += `<div> <img class="userIcon" width=5% src="${userIcon}" alt="user Icon"><span class='author'>${author}:  </span><span>${comment}</span><br></div>`;
  }

  document.getElementById("comments-container").innerHTML = optionsString;
}

document.addEventListener("DOMContentLoaded", function () {
  let name = localStorage.getItem("name");
  if (name !== null) {
    document.getElementById("author").value = name;
  }
});
