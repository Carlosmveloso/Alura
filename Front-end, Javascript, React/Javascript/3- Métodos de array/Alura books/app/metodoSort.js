//Filtrar os livros de acordo com os preços
 let ordenarPrecoBtn = document.getElementById("btnOrdenarPorPreco");
 ordenarPrecoBtn.addEventListener("click", ordenarLivrosPorPreco);

 function ordenarLivrosPorPreco () {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
    livrosNaTela(livrosOrdenados);
 }
