function fibonacci(quantTermos) {
  var listTermos = [0, 1];
  var a = 0,
    b = 1,
    i = 2,
    c;

  while (i < quantTermos) {
    i = i + 1;
    c = a + b;
    listTermos.push(c);
    a = b;
    b = c;
  }
  if (quantTermos <= 0) listTermos = [];
  else if (quantTermos == 1) listTermos = [0];
  return listTermos;
}

module.exports = fibonacci;
