//Definir dinâmicamente o valor total de todos os livros.

function valorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}