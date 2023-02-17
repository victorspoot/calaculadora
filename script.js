//Receber os dados = os numeros que serão digitados
const visor = document.querySelector('#visor-calculadora')
const numeros = [...document.querySelectorAll('button.numero')]

visor.innerHTML = `Olá`
numeros[0].onclick = function limpaTela() {
  visor.innerHTML = ''
}


console.log()