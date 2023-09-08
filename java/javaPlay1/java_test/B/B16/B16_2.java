package java_test.B16;
import java.util.*;

public class B16_2 {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("半径を入力して下さい");
    double num = scan.nextDouble();
    try{
      Circle c = new Circle(num);
      c.area();
    } catch (InvalidException e) {
      e.printStackTrace();
    }
  }
}
