const name = document.querySelector(".full-name");
const telephone = document.querySelector(".user-tel");
const email = document.querySelector(".user-email");
const model = document.querySelector(".model-family");
const memory = document.querySelector(".internal-memory");
const color = document.querySelector(".color");
const comment = document.querySelector(".user-comment");

//отправка данных с формы с помощью ajax

document
  .querySelector(".client-form input[type=submit]")
  .addEventListener("click", login);

function login(e) {
  e.preventDefault();
  fetch("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      name: document.querySelector(".full-name").value,
      telephone: document.querySelector(".user-tel")
        .value,
      email: document.querySelector(".user-email")
        .value,
      model: document.querySelector(".model-family").value,
      memory: document.querySelector(".internal-memory").value,
      color: document.querySelector(".color").value,
      comment: document.querySelector(".user-comment").value
    })
  }).then(_ => document.querySelector(".client-form").reset());
}

//запись в localstorage и reset введенных данных

// (function upload() {
//   name.value = localStorage["name"];
//   telephone.value = localStorage["telephone"];
//   email.value = localStorage["email"];
//   model.value = localStorage["model"];
//   memory.value = localStorage["memory"];
//   color.value = localStorage["color"];
//   comment.value = localStorage["comment"];
// })();

document
  .querySelector(".client-form input[type=submit]")
  .addEventListener("click", saveData);

function saveData(e) {
  e.preventDefault();
  localStorage["name"] = name.value;
  localStorage["telephone"] = telephone.value;
  localStorage["email"] = email.value;
  localStorage["model"] = model.value;
  localStorage["memory"] = memory.value;
  localStorage["color"] = color.value;
  localStorage["comment"] = comment.value;

  (function() {
    name.value = "";
    telephone.value = "";
    email.value = "";
    model.value = "";
    memory.value = "";
    color.value = "";
    comment.value = "";
  })();
}