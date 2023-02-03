let name = prompt('Qual é o seu nome?')

function getModelo(modelo) {
  const select = document.querySelector('.modelo .blue-border')
  if (select !== null) {
    select.classList.remove('blue-border')
  }
  modelo.classList.add('blue-border')
  activeButton()
}

function getGola(gola) {
  const select = document.querySelector('.gola .blue-border')
  if (select !== null) {
    select.classList.remove('blue-border')
  }
  gola.classList.add('blue-border')
  activeButton()
}

function getTecido(tecido) {
  const select = document.querySelector('.tecido .blue-border')
  if (select !== null) {
    select.classList.remove('blue-border')
  }
  tecido.classList.add('blue-border')

  activeButton()
}

const verifyInput = document.querySelector('input')
verifyInput.addEventListener('input', activeButton)

function checkInput() {
  input = verifyInput.value
  if (input !== '') {
    return true
  } else {
    return false
  }
}

function activeButton() {
  let quantidade = document.getElementsByClassName('blue-border').length
  if (quantidade === 3 && checkInput() === true) {
    document.querySelector('button').classList.add('color-button')
    document.querySelector('button').removeAttribute('disabled')
  }
}
