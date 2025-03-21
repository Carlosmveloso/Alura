const apiRequest = {
  async searchPets() {
    try {
      const response = await fetch("http://localhost:3000/pets")
      return await response.json();
    } catch {
      alert("Não foi possível se conectar com o banco de dados");
      throw error;
    }
  },
};
export default apiRequest;
