let listaDeNumerosSorteados = [];   
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 10."; 

//Função com parametro e sem retono
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
 function exibirMensagemInical(){
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
 }
    exibirMensagemInical();
//Função sem parametro e com retono
function numeroAleatorio() {
    let numeroEscohido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementos = listaDeNumerosSorteados.length;

    if(quantidadeElementos == numeroLimite) {
        listaDeNumerosSorteados = [];   
    }

   if (listaDeNumerosSorteados.includes(numeroEscohido)){ // O método includes verifica se o elemento está na lista.
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscohido);// O método push adiciona um item na lista.
        console.log(listaDeNumerosSorteados);
        return numeroEscohido;
    }
}

//Função sem parametro e sem retono
function verificarChute(){ // A função é responsável por determinar alguma ação dentro do programa.
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou");

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;

        exibirTextoNaTela("p", mensagemTentativas);

        document.getElementById("reiniciar").removeAttribute("disabled");


    } else if (chute > numeroSecreto) {
        exibirTextoNaTela("p", "O numero é menor que o chute.");

    } else {
        exibirTextoNaTela("p", "O número secreto é maior.");
    } 
    tentativas++;
    limparCampo();  
} 

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;

    exibirMensagemInical();

    document.getElementById("reiniciar").setAttribute("disabled", true);    
}

