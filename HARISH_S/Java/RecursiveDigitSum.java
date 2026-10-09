import java.util.Scanner;

public class RecursiveDigitSum {

    static int sumOfDigits(int number) {
        if (number == 0) {
            return 0;
        }

        return (number % 10) + sumOfDigits(number / 10);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int number = sc.nextInt();

        System.out.println(sumOfDigits(number));

        sc.close();
    }
}