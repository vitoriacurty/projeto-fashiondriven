let nome = prompt('Qual é o seu nome?')

let object = {
  "model": null,
  "neck": null,
  "material":null,
  "image": null,
  "owner": null,
  "author": null,
}

object.owner = nome
object.author = nome
object.image = input

// const input = document.getElementById('input').value


function getModelo(modelo) {
  const select = document.querySelector('.modelo .blue-border')
  if (select !== null) {
    select.classList.remove('blue-border')
  }
  modelo.classList.add('blue-border')

  object.model = modelo.id
  activeButton()
}

function getGola(gola) {
  const select = document.querySelector('.gola .blue-border')
  if (select !== null) {
    select.classList.remove('blue-border')
  }
  gola.classList.add('blue-border')

  object.neck = gola.id
  activeButton()
}

function getTecido(tecido) {
  const select = document.querySelector('.tecido .blue-border')
  if (select !== null) {
    select.classList.remove('blue-border')
  }
  tecido.classList.add('blue-border')

  object.material = tecido.id
  activeButton()
}

const verifyInput = document.querySelector('input')
verifyInput.addEventListener('input', activeButton)

function checkInput() {
  regexp =
    /^(?:(?:https?):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    const input = verifyInput.value
  object.image = input
  if  (regexp.test(input)) {
    return true
  } else {
    return false
  } 
}

///////////////////////////////////////////////////////
function activeButton() {
  
  let quantidade = document.getElementsByClassName('blue-border').length
  if (quantidade === 3 && checkInput() === true) {
    document.querySelector('button').classList.add('color-button')
    document.querySelector('button').removeAttribute('disabled')
  }
}

function confirmOrder() {
  sendOrder()
}

/////////////////////////////////////////

function sendOrder() {
  const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', object);
  promise.then(success);
  promise.catch(error);
  console.log(promise)
}

////////////////////////////////////////

function success(response) {
  alert("Sua encomenda foi efetuada com sucesso!");
  console.log(response.status);
  console.log(response);
  console.log(object)
}

function error(erro) {
  alert("Ops, não conseguimos processar sua encomenda");
  console.log(erro.response.status);
  console.log(erro.response.data);
}




