function converterDolar(valorDolar) {
  let cotacaoDolar = 6.02;
  let valorEmReal = valorDolar * cotacaoDolar;
  return valorEmReal.toFixed(2);
}

let valorDolar = 899;
let valorEmReal = converterDolar(valorDolar);
console.log(`Com ${valorDolar} dólares você pode converter para ${valorEmReal} reais.`);