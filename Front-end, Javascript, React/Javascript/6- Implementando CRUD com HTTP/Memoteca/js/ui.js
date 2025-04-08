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

    //Criando o espaço para os ícones de editar e excluir
    const icones = document.createElement("div");
    icones.classList.add("icones");

    //Criando o ícone de editar dentro do card
    const btnEditar = document.createElement("button");
    btnEditar.classList.add("botao-editar");
    btnEditar.onclick = () =>
      interfaceDoUsuario.editarPensamento(pensamento.id);
    const iconeEditar = document.createElement("img");
    iconeEditar.src = "assets/imagens/icone-editar.png";
    iconeEditar.alt = "Ícone de um lápis";

    //Criando o ícone de excluir dentro do card
    const btnExcluir = document.createElement("button");
    btnExcluir.classList.add("botao-excluir");
    btnExcluir.onclick = async () => {
      try {
        await requisiçõesApi.excluirPensamento(pensamento.id);
        interfaceDoUsuario.renderizarPensamentos();
      } catch {
        alert("Error ao excluir pensamento");
      }
    };
    const iconeExcluir = document.createElement("img");
    iconeExcluir.src = "assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Icone de uma lixeira";
    btnExcluir.appendChild(iconeExcluir)

    //Organizando os elementos dentro do card
    novoPensamento.appendChild(imagemAspas);
    novoPensamento.appendChild(conteudoDoPensamento);
    novoPensamento.appendChild(autoriaDoPensamento);
    novoPensamento.appendChild(icones);
    icones.appendChild(btnEditar);
    icones.appendChild(btnExcluir);
    btnEditar.appendChild(iconeEditar);
    listaDePensamentos.appendChild(novoPensamento);
  },

  limparFormulario() {
    document.getElementById("pensamento-form").reset();
  },
  //Colocando a função de editar na interface
  async editarPensamento(pensamentoId) {
    const pensamento = await requisiçõesApi.buscarPensamentoPorId(pensamentoId);
    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;
  },
};
export default interfaceDoUsuario;
