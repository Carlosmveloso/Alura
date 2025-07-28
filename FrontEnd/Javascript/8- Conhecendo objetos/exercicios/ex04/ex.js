anoAtual = new Date().getFullYear();

const livro = {
  titulo: "Nome do Livro",
  autor: "Autor do Livro",
  anoDePublicacao: 2000,
  genero: "Qualquer gênero",
  idade: anoAtual - 2000,
  avaliacao: null,
};

console.log(livro);


const novaAvaliacao = {
  nota: 4.5,
  comentario: 'Esse livro tocou meu coração !',
}

if (livro.avaliacao === null) {
  livro.avaliacao = novaAvaliacao;
} else {
  console.log('Esse livro já tem uma avaliacão.');
}

console.log('Detalhes do livro: ')
console.log(`Título: ${livro.titulo}`)
console.log(`Autor: ${livro.autor}`)
console.log(`Ano de Publicação: ${livro.anoDePublicacao}`)
console.log(`Gênero: ${livro.genero}`)
console.log(`Avaliação: ${livro.avaliacao === null 
  ? 'Nenhuma avaliação disponível.' 
  : `Nota: ${livro.avaliacao.nota}, Comentário: "${livro.avaliacao.comentario}"`}`);


