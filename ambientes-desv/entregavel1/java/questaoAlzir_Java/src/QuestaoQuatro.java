import javax.swing.*;

public class QuestaoQuatro {

        public static void main(String[] args) {
            int a = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero :"));
            int b = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero :"));
            int mcd = maximoComunDivisor(a, b);
            System.out.printf("O MCD de %d e %d eh %d\n", a, b, mcd);
        }

        public static int maximoComunDivisor(int a, int b) {
            int temporal;
            while (b != 0) {
                temporal = b;
                b = a % b;
                a = temporal;
            }
            return a;
        }
    }
