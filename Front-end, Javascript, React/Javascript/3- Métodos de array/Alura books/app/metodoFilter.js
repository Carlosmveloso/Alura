//Filtrar os livros de acordo com a categoria dele
const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const categoriaBtn = document.getElementById(this.id);
    const categoria = categoriaBtn.value;
    let livrosFiltrados = categoria == "disponivel" ? filtrarPorDisponibilidade() : FiltrarPorCategoria(categoria);
    livrosNaTela(livrosFiltrados)
    if (categoria == "disponivel") {
        const valorTotal = valorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirComboNaTela(valorTotal)
    }
}

function FiltrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirComboNaTela(valorTotal) {
    comboTodosOsLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}