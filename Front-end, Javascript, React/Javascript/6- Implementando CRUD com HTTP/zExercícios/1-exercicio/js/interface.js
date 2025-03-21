import apiRequest from "./apiRequest.js";

const userInterface = {
  async allPets() {
    const listOfPets = document.getElementById("list-of-pets");
    try {
      const pets = apiRequest.searchPets();
      pets.forEach((pet) => {
        listOfPets.innerHTML += `
        <li>
            <p>Nome: ${pet.nome}</p>
            <p>Espécie: ${pet.especie}</p>
            <p>Raça: ${pet.raca}</p>
        </li>`;
      });
    } catch {
        alert("Não foi possível conectar com o banco de dados")
    }
  },
};

export default userInterface;
