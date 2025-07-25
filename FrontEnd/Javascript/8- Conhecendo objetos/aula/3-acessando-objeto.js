const estudante = {
  nome: "Carlos Eduardo",
  idade: 19,
  cpf: '11829491423',
  curso: 'JavaScript',
};

function exibeInfoEstudante (objEstudante, chaveEstudante) {
    return objEstudante[chaveEstudante];
    //Os [] serve para acessa a propriedade do objeto (objEstudante)
}

//Maneiras de acessar um objeto.
console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, "cpf"));

