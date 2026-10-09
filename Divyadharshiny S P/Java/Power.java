public class Power {
    public static void main(String[] args) {

        int a = 2;
        int b = 5;

        int result = 1;

        for (int i = 1; i <= b; i++) {
            result = result * a;
        }

        System.out.println(a + "^" + b + " = " + result);
    }
}