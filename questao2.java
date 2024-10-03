import java.util.Scanner;

public class ContadorDeLetrasA {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.print("Por favor, informe uma frase ou palavra: ");
        String entrada = scanner.nextLine();
        
        int contador = 0;
        
        for (int i = 0; i < entrada.length(); i++) {
            char caractere = entrada.charAt(i);
            if (caractere == 'a' || caractere == 'A') {
                contador++;
            }
        }

        if (contador > 0) {
            System.out.println("A letra 'a' aparece " + contador + " vez(es) na string.");
        } else {
            System.out.println("A letra 'a' não foi encontrada na string.");
        }
        
        scanner.close();
    }
}



