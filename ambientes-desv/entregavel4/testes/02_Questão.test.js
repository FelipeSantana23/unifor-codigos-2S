const somatorio = require("../Funcoes/02_Questão");

test("a soma dos numeros 4 + 4 é 8", () => {
  expect(somatorio([4, 4])).toBe(8);
});
test("a soma de 5 +5 é 10", () => {
  expect(somatorio([5, 5])).toBe(10);
});
