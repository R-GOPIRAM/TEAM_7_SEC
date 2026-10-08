import java.util.ArrayList;

public class ArrayListOperations {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");
        list.add("Date");

        System.out.println("Initial List: " + list);


        list.remove("Apple");

        System.out.println("Initial List: " + list);

        boolean contains = list.contains("Apple");

        System.out.println(contains);


        
    }
}
