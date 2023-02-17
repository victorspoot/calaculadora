//Receber os dados = os numeros que serão digitados
const visor = document.querySelector('#visor-calculadora')
const numeros = [...document.querySelectorAll('button.numero')]

numeros[0].onclick = function limpaTela() {
  visor.innerHTML = ''
} 

numeros[1].onclick = function dividir() {
  numeros.splice(1, 1, 2)
  visor.innerHTML += `/`
}

numeros[2].onclick = function imprimirSete() {
  numeros[2] = 7
  visor.innerHTML += `7`
  return numeros
}

numeros[3].onclick = function imprimirOito() {
  numeros[3] = 8
  visor.innerHTML += `8`
  return numeros
}

numeros[16].onclick = function resultado() {
  if(numeros[1].onclick = true) {
    let resultado = numeros / numeros
    visor.innerHTML = `${resultado}`
  }
}




console.log(numeros)