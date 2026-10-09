import java.util.Scanner;

public class TitleCaseConverter {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String sentence = sc.nextLine();

        String[] words = sentence.toLowerCase().split("\\s+");

        for (int i = 0; i < words.length; i++) {
            if (!words[i].isEmpty()) {
                words[i] = Character.toUpperCase(words[i].charAt(0))
                        + words[i].substring(1);
            }
        }

        System.out.println(String.join(" ", words));

        sc.close();
    }
}