//Colocar os livros que estavam na API 
const inserirLivros = document.getElementById("livros");
const comboTodosOsLivros = document.getElementById("valor_total_livros_disponiveis")

function livrosNaTela (listaDeLivros) {
    comboTodosOsLivros.innerHTML = "";
    inserirLivros.innerHTML = "";
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidade(livro)
        //Fazer com o operador ternário
        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
        inserirLivros.innerHTML += `
            <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
            </div>
        `
    })
}
//Verificar a disponibilidade do livro
//function verificarDisponibilidade (livro) {
//    if (livro.quantidade > 0){
//        return "livro__imagens"         
//    } else {
//        return "livro__imagens indisponivel"
//    }
//}