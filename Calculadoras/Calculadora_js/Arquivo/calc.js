function insert(num) {
  document.getElementById("display").innerHTML += num;
}
function clean() {
  document.getElementById("display").innerHTML = "";
}
function back() {
  let resultado = document.getElementById("display").innerHTML;
  resultado  = resultado.substring(0,resultado.length - 1);
}
function calcular() {
  let resultado = document.getElementById("display").innerHTML;
  if (resultado) {
    resultado = eval(resultado);
  } else {
    clean();
  }
}
