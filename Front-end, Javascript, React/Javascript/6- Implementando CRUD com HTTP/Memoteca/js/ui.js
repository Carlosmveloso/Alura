// Objetivo: Responsável por lidar com a interface do usuário, manipulando o DOM

import requisiçõesApi from "./api.js"; // Importando uma constante js de outro arquivo

const interfaceDoUsuario = {
  async renderizarPensamentos() {
    //const listaDePensamentos = document.getElementById("lista-pensamentos");
    try {
      const pensamentos = await requisiçõesApi.buscarPensamentos();
      pensamentos.forEach(interfaceDoUsuario.adicionarNovoPensamentoNaLista);
    } catch {
      alert("Erro ao renderizar o pensamento");
    }
  },

  //Criando a interface quando criado o novo pensamento
  adicionarNovoPensamentoNaLista(pensamento) {
    const listaDePensamentos = document.getElementById("lista-pensamentos");
    const novoPensamento = document.createElement("li");
    novoPensamento.setAttribute("data-id", pensamento.id);
    novoPensamento.classList.add("li-pensamento");

    //Adicionando a imagem de aspas dentro do card
    const imagemAspas = document.createElement("img");
    imagemAspas.src = "assets/imagens/aspas-azuis.png";
    imagemAspas.alt = "Aspas azuis";
    imagemAspas.classList.add("icone-aspas");

    //Adicionando o conteúdo dentro do card
    const conteudoDoPensamento = document.createElement("div");
    conteudoDoPensamento.textContent = pensamento.conteudo;
    conteudoDoPensamento.classList.add("pensamento-conteudo");

    //Adicionando a autoria dentro do card
    const autoriaDoPensamento = document.createElement("div");
    autoriaDoPensamento.textContent = pensamento.autoria;
    autoriaDoPensamento.classList.add("pensamento-autoria");

    //Organizando os elementos dentro do card
    novoPensamento.appendChild(imagemAspas);
    novoPensamento.appendChild(conteudoDoPensamento);
    novoPensamento.appendChild(autoriaDoPensamento);
    listaDePensamentos.appendChild(novoPensamento);

  },
};
export default interfaceDoUsuario;
