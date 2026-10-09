public class WordCount {
    public static void main(String[] args) {
        String text = "Java is simple and fun";
        String[] words = text.trim().split("\\s+");
        System.out.println("Word count: " + words.length);
    }
}