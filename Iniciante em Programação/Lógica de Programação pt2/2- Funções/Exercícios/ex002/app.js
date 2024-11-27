let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio!";

function cliqueConsole() {
    console.log("Clicou.");
};

function cliqueAlerta() {
    alert("Eu amo Javascript.");
};

function cliquePrompt() {
    let cidade = prompt("Qual cidade você mora ?");
    alert(`Estive em ${cidade} e lembrei de você.`)
};

function cliqueSoma() {
    let numero1 = parseInt(prompt("Digite o primeiro número: ")); // O prompt recebe um valor como string, por isso quando você vai digitar um número tem que colocar o parseInt para transformar ele em inteiro.
    // Assim vai de concatenação para soma.
    let numero2 = parseInt(prompt("Digite o segundo número: "));
    let soma = numero1 + numero2;
    alert(`O valor da soma desses números é  ${soma}.`)
}

function mensagem(nome) {
    console.log(`Olá ${nome}`);
}
mensagem("Carlos");