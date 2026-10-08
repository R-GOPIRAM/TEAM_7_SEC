import java.util.Scanner;

public class DayIsWeekend {

    enum Day {
        SUNDAY(true),
        MONDAY(false),
        TUESDAY(false),
        WEDNESDAY(false),
        THURSDAY(false),
        FRIDAY(false),
        SATURDAY(false);

        boolean isWeekend;

        Day(boolean isWeekend) {
            this.isWeekend = isWeekend;
        }
        public boolean isWeekend() {
        return isWeekend;
    }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter day number:");
        int n = sc.nextInt();

        
            Day day = Day.values()[n - 1];
            System.out.println(n + " = " + day);
            if(day.isWeekend()){
                System.out.println(day+" is a Weekend");
            }
            else{
                System.out.println(day+" is not a Weekend");
            }
        } 
       
    
}

