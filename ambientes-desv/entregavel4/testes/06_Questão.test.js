const contagem = require("../Funcoes/06_Questão");

test("dos alunos de notas 4, 2, 2, 4 e 6, apenas 1 passou", () => {
  expect(contagem([4, 2, 2, 4, 6])).toBe(1);
});
test("dos alunos de notas 4, 2, 2, 10 e 6, apenas 2 passaram", () => {
  expect(contagem([4, 2, 2, 10, 6])).toBe(2);
});
