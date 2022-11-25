function somatorio(numeros) {
  var soma = 0;

  numeros.forEach((numero) => {
    soma += numero;
  });

  return soma;
}
module.exports = somatorio;
