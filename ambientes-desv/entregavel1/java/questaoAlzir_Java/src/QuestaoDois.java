import javax.swing.JOptionPane;

public class QuestaoDois {

    public static void main(String[] args) {
        int quantidade = Integer.parseInt(JOptionPane.showInputDialog("Quantidade de numeros a serem somados: "));
        ;
        int numero;
        int soma = 0;
        var i = 0;

        while (i < quantidade) {
            i = i + 1;
            numero = Integer.parseInt(JOptionPane.showInputDialog("Escreva o numero: "));
            soma = soma + numero;
        }

        System.out.println("O valor da soma dos numeros informados eh: " + soma);
    }
}