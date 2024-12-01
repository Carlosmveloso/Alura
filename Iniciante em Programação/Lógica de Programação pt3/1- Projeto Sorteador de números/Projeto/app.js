function sortear() {
   let quantidade = parseInt(document.getElementById("quantidade").value);
   let numeroMinimo = parseInt(document.getElementById("de").value);
   let numeroMaximo = parseInt(document.getElementById("ate").value);

   let numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
   alert(numero);
}

function obterNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}