//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10."; 

let numeroSecreto = numeroAleatorio();

//Função com parametro e sem retono
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 a 10");

//Função sem parametro e com retono
function numeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
}
//Função sem parametro e sem retono
function verificarChute(){ // A função é responsável por determinar alguma ação dentro do programa.
    let chute = document.querySelector("input").value;
    console.log(chute == numeroSecreto);
}       