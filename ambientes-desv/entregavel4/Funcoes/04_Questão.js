function mdc(numeroUm, numeroDois) {
  while (numeroUm != numeroDois) {
    if (numeroUm > numeroDois) {
      numeroUm -= numeroDois;
    } else {
      numeroDois -= numeroUm;
    }
  }

  return numeroUm;
}

module.exports = mdc;
