const requisiçõesApi = {
  async buscarPensamento() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json(); // Fazendo a conversão do formato json para o objeto javascript.
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
};

export default requisiçõesApi; // Exportar a api para outros arquivos js.
