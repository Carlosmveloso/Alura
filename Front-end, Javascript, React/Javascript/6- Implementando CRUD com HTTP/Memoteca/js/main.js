// Objetivo: Responsável pelo carregamento da aplicação
import interfaceDoUsuario from "./ui.js";
import requisiçõesApi from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  //Quando a página for carregada executa esse código
  interfaceDoUsuario.renderizarPensamentos();

  //Colocar o formulário para funcionar para criar um novo pensamento
  const formularioNovoPensamento = document.getElementById("pensamento-form");
  formularioNovoPensamento.addEventListener("submit", envioDoFormulario); // O evento de submit é específico para formulários
  const btnCancelar = document.getElementById("botao-cancelar");
  btnCancelar.addEventListener("click", renderizarLimpezaDoFormulario);
});

async function envioDoFormulario(envio) {
  envio.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    if (id) {
      await requisiçõesApi.editarPensamento({ id, conteudo, autoria });
    } else {
      await requisiçõesApi.novoPensamento({ conteudo, autoria });
    }
    interfaceDoUsuario.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar com banco de dados");
  }
}

function renderizarLimpezaDoFormulario() {
  interfaceDoUsuario.limparFormulario();
}
