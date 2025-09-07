//Criar uma função para calcular juros compostos
//Função deve recerber valores no formato inteiro: valor, % de juros e tempo
//fórmula: valor * (juros elevado ao tempo)
//usar arrow function

const calcularJurosCompostos = (valor, juros, tempo) => {
    let taxaJuros = (juros/100) + 1;
    return valor * Math.pow(taxaJuros, tempo) //O Math é uma biblioteca própria do javascript
};

console.log(`Seu juros é de ${calcularJurosCompostos(100, 10,1).toFixed(2)} reais`); //toFixed é um método para limitar as casas decimáis após a vírgula

