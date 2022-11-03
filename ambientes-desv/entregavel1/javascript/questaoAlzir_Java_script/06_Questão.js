var QuantAlu = prompt("Número de notas de alunos:"), nota, contagem = 0,i = 0;

while (i < QuantAlu) {
    i = i + 1;

    nota = Integer.parseInt(JOptionPane.showInputDialog("valor de N"));

    if (nota >= 10) {
        contagem = contagem + 1;
    }else {
        System.out.println( "nao eh um numero valido");
    }
}

document.write("Número de aprovações foi de: " + contagem + " aluno(os)" );