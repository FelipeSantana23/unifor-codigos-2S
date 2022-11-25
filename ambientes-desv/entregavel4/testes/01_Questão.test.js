const numeroPrimo = require("../Funcoes/01_Questão");

test("o numero 5 é primo", () => {
  expect(numeroPrimo(5)).toBe(true);
});
test("o numero 77 não é primo", () => {
  expect(numeroPrimo(77)).toBe(false);
});
