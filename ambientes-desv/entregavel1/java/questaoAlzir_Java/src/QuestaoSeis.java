import javax.swing.*;

public class QuestaoSeis {
    public static void main(String[] args) {
        int QuantAlu = Integer.parseInt(JOptionPane.showInputDialog("Numero de notas de alunos:"));
        int nota;
        int contagem = 0;
        int i = 0;

        while (i < QuantAlu) {
            i = i + 1;

            nota = Integer.parseInt(JOptionPane.showInputDialog("Qual foi a nota do aluno:"));

            if (nota >= 5) {
                contagem = contagem + 1;
            }
        }

        System.out.printf("O numero de aprovacoes foi de: " + contagem + " aluno(os)" );
    }
}
