// Objetivo: Responsável por lidar com as solicitações da à API

const requisiçõesApi = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json(); // Fazendo a conversão do formato json para o objeto javascript.
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  //Criar um novo pensamento
  async novoPensamento(pensamento) {
    try {
      // Chamado de requisições HTTP
      const response = await fetch("http://localhost:3000/pensamentos", {
        // O "POST" serve para enviar uma informação ao fetch e o "GET" para receber uma informação do fetch
        method: "POST",
        //Serve para informar o tipo de conteúdo que está sendo enviado
        headers: { "Content-Type": "application/json" },
        //Funcão de converter um objeto javascript para um formato string JSON
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Erro ao salvar o pensamento");
      throw error;
    }
  },
  //Buscar um único pensamento por ID
  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
      return await response.json(); // Fazendo a conversão do formato json para o objeto javascript.
    } catch {
      alert("Erro ao buscar pensamento");
      throw error;
    }
  },
  //Função de editar um pensamento
  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Erro ao editar pensamento");
      throw error;  
    }
  },
};

export default requisiçõesApi; // Exportar a api para outros arquivos js.
