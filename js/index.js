//запись в localstorage и reset введенных данных

const name = document.querySelector(".full-name");
const telephone = document.querySelector(".user-tel");
const email = document.querySelector(".user-email");
const comment = document.querySelector(".user-comment");

(function upload() {
  name.value = localStorage["name"];
  telephone.value = localStorage["telephone"];
  email.value = localStorage["email"];
  comment.value = localStorage["comment"];
})();

document
  .querySelector(".client-form input[type=submit]")
  .addEventListener("click", saveData);

function saveData(e) {
  e.preventDefault();
  localStorage["name"] = name.value;
  localStorage["telephone"] = telephone.value;
  localStorage["email"] = email.value;
  localStorage["comment"] = comment.value;

  (function() {
    name.value = "";
    telephone.value = "";
    email.value = "";
    comment.value = "";
  })();

  //   const userInformation = localStorage;
  //   const stringInformation = JSON.stringify(userInformation);
  //   const xhr = new XMLHttpRequest();

  //   xhr.open("POST", "client-data.json", true);
  //   xhr.setRequestHeader("Content-Type", "application/json");
  //   xhr.send();

  //   console.log(stringInformation);
}

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
      name: document.querySelector(".client-form input[name=full-name]").value,
      telephone: document.querySelector(".client-form input[name=user-tel]")
        .value
    })
  }).then(_ => document.querySelector(".client-form").reset());
}
