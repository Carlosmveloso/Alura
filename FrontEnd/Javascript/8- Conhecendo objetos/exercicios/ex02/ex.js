let anoAtual = new Date().getFullYear();

const livro = {
    title: 'Nome',
    author: 'Autor',
    yearPublication: 2000,
    gender: 'None',
}

let idadePublicacao = anoAtual - livro.yearPublication;
const mostrarDetalhes = `Nome: ${livro.title}
Autor: ${livro.author}
Ano de Publicacão: ${livro.yearPublication}
Gênero: ${livro.gender}
Idade: ${idadePublicacao} anos `

console.log(mostrarDetalhes);
