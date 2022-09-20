
var quantidade, numero, soma,i;
quantidade = prompt("Quantidade de numeros a serem somados:");
var soma = 0;
var i = 0;

while (i < quantidade) {
    i = i + 1;
    numero = parseInt(prompt("Escreva o numero:"));
    soma = soma + numero;
}

console.log("O valor da soma dos numeros informados é = " + soma);
