function contagem(notas) {
  var nota,
    contagem = 0;

  notas.forEach((nota) => {
    if (nota >= 5) {
      contagem++;
    }
  });
  return contagem;
}
module.exports = contagem;
