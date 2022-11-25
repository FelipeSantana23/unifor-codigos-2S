const mdc = require("../Funcoes/04_Questão");

test("o calculo de mdc de 2 e 2 é: 2", () => {
  expect(mdc(2, 2)).toBe(2);
});
test("o calculo de mdc de 5 e 1 é: 1", () => {
  expect(mdc(5, 1)).toBe(1);
});
