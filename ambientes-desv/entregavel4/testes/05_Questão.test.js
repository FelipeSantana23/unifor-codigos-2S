const quickSort = require("../Funcoes/05_Questão");

test("os numeros 5,4,2,10 serão 2,4,5,10 ", () => {
  expect(quickSort([5, 4, 2, 10])).toMatchObject([2, 4, 5, 10]);
});
test("os numeros 50,-54,6,-1 serão -54,-1,6,50", () => {
  expect(quickSort([50, -54, 6, -1])).toMatchObject([-54, -1, 6, 50]);
});
