import java.util.Scanner;

public class PrimeNumbersRange {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int start = sc.nextInt();
        int end = sc.nextInt();

        for (int number = start; number <= end; number++) {
            if (number < 2) {
                continue;
            }

            boolean isPrime = true;

            for (int i = 2; i * i <= number; i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }

            if (isPrime) {
                System.out.print(number + " ");
            }
        }

        sc.close();
    }
}