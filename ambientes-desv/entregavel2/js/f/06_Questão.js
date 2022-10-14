function contagen(){
var QuantAlu = prompt("Número de notas de alunos:"), nota, contagem = 0,i = 0;

while (i < QuantAlu) {
    i = i + 1;

    nota = prompt("Qual foi a nota do aluno:");

    if (nota >= 5) {
        contagem = contagem + 1;
    }
}

document.write("Número de aprovações foi de: " + contagem + " aluno(os)" );
}