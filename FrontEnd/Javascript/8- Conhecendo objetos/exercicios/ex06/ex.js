const livro = {
  titulo: "Infância",
  autor: "Graciliano Ramos",
  anoDePublicacao: 2005,
  genero: "Bibliografia",
  idadeDaObra: 5,
  avaliacao: {
    estrelas: 3,
    comentario: "Me surpreendeu",
  },
};

console.log(livro);

delete livro.avaliacao;

console.log(livro)

