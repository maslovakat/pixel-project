
//отправка данных с формы с помощью ajax

document
  .querySelector(".send-button")
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
      model: 'pixel stand',
      name: document.querySelector(".full-name").value,
      telephone: document.querySelector(".user-tel")
        .value,
      email: document.querySelector(".user-email")
        .value,
      comment: document.querySelector(".user-comment").value
    })
  }).then(_ => document.querySelector(".client-form").reset());
}

//запись в localstorage и reset введенных данных

const name = document.querySelector(".full-name");
const telephone = document.querySelector(".user-tel");
const email = document.querySelector(".user-email");
const comment = document.querySelector(".user-comment");
const model = 'pixel stand';

// (function upload() {
//   name.value = localStorage["name"];
//   telephone.value = localStorage["telephone"];
//   email.value = localStorage["email"];
//   comment.value = localStorage["comment"];
// })();

document
  .querySelector(".client-form input[type=submit]")
  .addEventListener("click", saveData);

function saveData(e) {
  e.preventDefault();
  localStorage["model"] = model;
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
}

// currency convert

document
    .querySelector('.convert')
    .addEventListener('click', currConvert);

function currConvert(e) {
    e.preventDefault();
    const currFrom = document.querySelector('.curr-from').textContent;
    const currTo = document.querySelector('.curr-to').value;
    const currKey = currFrom + '_' + currTo;

    fetch(`https://free.currconv.com/api/v7/convert?q=${currKey}&compact=ultra&apiKey=8120039e1d66bfa43c62`)
        .then( response => response.json() )
        .then( currency => {
           const rate = currency[currKey];
           const sourceAmount = document.querySelector('.curr-amount').textContent;
           const convertedAmount = rate * sourceAmount;
           document.querySelector('.curr-converted')
            .innerText = convertedAmount.toFixed(2);
        });
}
