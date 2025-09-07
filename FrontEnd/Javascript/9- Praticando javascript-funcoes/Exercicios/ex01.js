//Função para calcular potência

function calcularPotencia (numero, potencia) {
    resultado = 1;
    for (let contador = 0; contador < potencia; contador++) {
        resultado = resultado * numero;
    }
    return resultado
}

console.log(calcularPotencia(5, 2))
console.log(calcularPotencia(2, 5))