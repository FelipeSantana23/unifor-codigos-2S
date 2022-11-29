function swap(numeros, indiceEsquerda, indiceDireita) {
  var temp = numeros[indiceEsquerda];
  numeros[indiceEsquerda] = numeros[indiceDireita];
  numeros[indiceDireita] = temp;
}
function partition(numeros, esquerda, direita) {
  var pivo = numeros[Math.floor((direita + esquerda) / 2)],
    i = esquerda,
    j = direita;
  while (i <= j) {
    while (numeros[i] < pivo) {
      i++;
    }
    while (numeros[j] > pivo) {
      j--;
    }
    if (i <= j) {
      swap(numeros, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quickSort(numeros, esquerda = 0, direita = numeros.length - 1) {
  var indice;
  if (numeros.length > 1) {
    indice = partition(numeros, esquerda, direita);
    if (esquerda < indice - 1) {
      quickSort(numeros, esquerda, indice - 1);
    }
    if (indice < direita) {
      quickSort(numeros, indice, direita);
    }
  }
  return numeros;
}

//document.write(quickSort([8, 7, 5, 0, 15, 5255, -1]));

var teste1 = Number(prompt("Digite o valor que deseja ordenar:"));
console.log(teste1);

var teste2 = Number(prompt("Digite o valor que deseja ordenar:"));
console.log(teste2);

var teste3 = Number(prompt("Digite o valor que deseja ordenar:"));
console.log(teste3);

var teste4 = Number(prompt("Digite o valor que deseja ordenar:"));
console.log(teste4);

document.write(quickSort([teste1, teste2, teste3, teste4]));
