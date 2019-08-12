//count price of phone


const name = document.querySelector(".full-name");
const telephone = document.querySelector(".user-tel");
const email = document.querySelector(".user-email");
const model = document.querySelector(".model-family");
const memory = document.querySelector(".internal-memory");
const color = document.querySelector(".color");
const comment = document.querySelector(".user-comment");
const price = document.querySelector('.curr-amount');

color.addEventListener('change', changePrice);
memory.addEventListener('change', changePrice);
model.addEventListener('change', changePrice);


function changePrice(){
    if(model.value === 'GooglePixel3' && memory.value === '64GB' && color.value === 'NotPink'){
        price.innerText = 998;
    }else if(model.value === 'GooglePixel3' && memory.value === '64GB' && color.value === 'ClearlyWhite'){
        price.innerText = 479;
    }else if(model.value === 'GooglePixel3' && memory.value === '64GB' && color.value === 'JustBlack'){
        price.innerText = 299;
    }
    if(model.value === 'GooglePixel3' && memory.value === '128GB' && color.value === 'NotPink'){
        price.innerText = 1400;
    }else if(model.value === 'GooglePixel3' && memory.value === '128GB' && color.value === 'ClearlyWhite'){
        price.innerText = 1255;
    }else if(model.value === 'GooglePixel3' && memory.value === '128GB' && color.value === 'JustBlack'){
        price.innerText = 1055;
    }
    if(model.value === 'GooglePixel3Xl' && memory.value === '64GB' && color.value === 'NotPink'){
        price.innerText = 1198;
    }else if(model.value === 'GooglePixel3Xl' && memory.value === '64GB' && color.value === 'ClearlyWhite'){
        price.innerText = 679;
    }else if(model.value === 'GooglePixel3Xl' && memory.value === '64GB' && color.value === 'JustBlack'){
        price.innerText = 499;
    }
    if(model.value === 'GooglePixel3Xl' && memory.value === '128GB' && color.value === 'NotPink'){
        price.innerText = 1600;
    }else if(model.value === 'GooglePixel3Xl' && memory.value === '128GB' && color.value === 'ClearlyWhite'){
        price.innerText = 1455;
    }else if(model.value === 'GooglePixel3Xl' && memory.value === '128GB' && color.value === 'JustBlack'){
        price.innerText = 1255;
    }
}
changePrice();


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
           document.querySelector('.convertded-to')
            .innerText = currTo;

        });
}

