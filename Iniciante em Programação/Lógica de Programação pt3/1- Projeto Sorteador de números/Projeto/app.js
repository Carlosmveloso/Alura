function sortear() {
   let quantidade = parseInt(document.getElementById("quantidade").value);
   let numeroMinimo = parseInt(document.getElementById("de").value);
   let numeroMaximo = parseInt(document.getElementById("ate").value);
   let numerosSorteados = [];
   let numero;
   //Loop FOR geralmente é utilizado para repetir um bloco de código enquanto um condição é verdadeira.
   //Geralmente usado para percorrer elementos em array.
   for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);

      //O while sempre vai retornar um número booleano
      while (numerosSorteados.includes(numero)) { //O método includes verifica se já tem um elemento na array.
         numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
      }

      numerosSorteados.push(numero);
   }
   let resultado = document.getElementById("resultado");
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

   alterarBotaoReiniciar(); 
}

function obterNumeroAleatorio(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Aqui vamos alterar o status do botão reiniciar dentro do arquivo CSS
function alterarBotaoReiniciar() {
  let botao = document.getElementById("btn-reiniciar");

  //O método classList permite manipular as classes de um elemento HTML
  //O método contains verifica se o HTMl tem determinada classe
  if (botao.classList.contains("container__botao-desabilitado")) {

   botao.classList.remove("container__botao-desabilitado");
   botao.classList.add("container__botao");

  } else {

   botao.classList.remove("container__botao");
   botao.classList.add("container__botao-desabilitado");

  }
}

function reiniciar(){
   document.getElementById("quantidade").value = "";
   document.getElementById("de").value =  "";
   document.getElementById("ate").value = "";
   document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
   alterarBotaoReiniciar();

}
