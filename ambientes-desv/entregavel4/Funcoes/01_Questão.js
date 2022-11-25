function numeroPrimo(numero) {
  let divisor = 2;

  while (numero % divisor != 0) divisor++;

  if (numero == divisor) {
    return true;
  } else {
    return false;
  }
}
module.exports = numeroPrimo;
