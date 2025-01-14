//Filtrar os livros de acordo com a categoria dele
const botoes = document.querySelectorAll(".btn");
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const categoriaBtn = document.getElementById(this.id)
    const categoria = categoriaBtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    livrosNaTela(livrosFiltrados)
}