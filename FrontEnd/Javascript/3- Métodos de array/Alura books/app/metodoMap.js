//Aplicação do desconto nos livros
function aplicarDesconto (livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}//O ... vai fazer uma cópia de toda a array para um outro objeto.
    });
    return livrosComDesconto
}