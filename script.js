function insert(numero) {
  document.getElementById("visor-calculadora").innerHTML += numero
}

function limparTela() {
  document.getElementById('visor-calculadora').innerHTML = ""
}

function apagar() {
 let res = document.getElementById('visor-calculadora').innerHTML
 document.getElementById('visor-calculadora').innerHTML = res.substring(0, res.length -1)
}

function calcular() {
  let res = document.getElementById("visor-calculadora").innerHTML
  if(res) {
    document.getElementById('visor-calculadora').innerHTML = eval(res)
  } 
}
