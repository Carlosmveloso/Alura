const estudante = {
  nome: "Carlos Eduardo",
  idade: 19,
  cpf: '11829491423',
  curso: 'JavaScript',
};

console.log(estudante.telefone);
console.log(estudante);


//Como criar uma chave nova?
estudante.telefone = '83991134990'
console.log(estudante.telefone)
console.log(estudante);


//Como alterar uma chave ja existente ?
estudante.nome = "Carlos Eduardo Marques Veloso"
console.log(estudante.nome)
console.log(estudante);

//Como deletar uma chave?

delete estudante.telefone
console.log(estudante);


