import javax.swing.*;

public class QuestaoSeis {
    public static void main(String[] args) {
        System.out.println("N tem que ser maior ou igual 1" +
                "que 10");
        int QuantAlu = Integer.parseInt(JOptionPane.showInputDialog("quantidade de n:"));
        int nota;
        int contagem = 0;
        int i = 0;

        while (i < QuantAlu) {
            i = i + 1;

            nota = Integer.parseInt(JOptionPane.showInputDialog("valor de N"));

            if (nota >= 10) {
                contagem = contagem + 1;
            }else {
                System.out.println( "nao eh um numero valido");
            }
        }

        System.out.printf("o n inteiro será " + contagem );
    }
}

