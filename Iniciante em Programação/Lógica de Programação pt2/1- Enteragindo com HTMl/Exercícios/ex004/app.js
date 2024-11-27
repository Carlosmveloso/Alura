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
}