const estudante = {
  nome: "Carlos Eduardo",
  idade: 19,
  cpf: '11829491423',
  curso: 'JavaScript',
};

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os 3 primeiros dígitos do CPF de ${estudante.nome} são ${estudante.cpf.substring(0, 3)}`);



//Um objeto é feito por chaves e valores;
//Nesse exemplo, a chave nome é uma chave e a string 'Carlos Eduardo' é o valor dela.
//O método substring serve para pegar uma parte de uma string onde você pode determinar o (início, fim) dela, tornando ela uma array de caracteres, excluindo o último.

