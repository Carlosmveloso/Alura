// Objetivo: Responsável por lidar com a interface do usuário, manipulando o DOM

import requisiçõesApi from "./api.js"; // Importando uma constante js de outro arquivo

const interfaceDoUsuario = {
  async renderizarPensamentos() {
    const listaDePensamentos = document.getElementById("lista-pensamentos");
    try {
      const pensamentos = await requisiçõesApi.buscarPensamentos();
      pensamentos.forEach((pensamento) => {
        listaDePensamentos.innerHTML += `
        <li class="li-pensamento" data-id="${pensamento.id}">
            <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
            <div class="pensamento-conteudo">${pensamento.conteudo}</div>
            <div class="pensamento-autoria">${pensamento.autoria}</div>
        </li>`;
      });
    } catch {
      alert("Erro ao renderizar o pensamento");
    }
  },
};

export default interfaceDoUsuario;
