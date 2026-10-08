import java.util.*;

public class GroupWords {
    public static void main(String[] args) {
        String[] words = {
            "apple", "ant",
            "ball", "banana",
            "cat", "car"
        };
        Map<Character, List<String>> map = new HashMap<>();
        for (String word : words) {
            char first = word.charAt(0);
            map.putIfAbsent(first, new ArrayList<>());
            map.get(first).add(word);
        }
        System.out.println(map);
    }
}