import javax.swing.JOptionPane;

public class QuestaoTres {

    public static void main(String[] args) {
        int n = Integer.parseInt(JOptionPane.showInputDialog("Digite o numero de termos:"));
        int a = 0;
        int b = 1;
        int i = 2;
        int c;

        if (n == 1) {
            System.out.println(a);
        } else {
            System.out.println(a + ", " + b);
        }

        while (i < n) {
            i = i + 1;
            c = a + b;
            System.out.println(", " + c);
            a = b;
            b = c;
        }
    }
}

