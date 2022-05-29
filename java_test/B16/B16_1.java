package java_test.B16;
import java.util.*;

public class B16_1 {
  public static void mail(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.print("1つ目の少数の値を入力してください:");
    String num1 = scan.nextLine();
    System.out.print("2つ目の少数の値を入力してください:");
    String num2 = scan.nextLine();
    try {
      double c1 = Double.parseDouble(num1);
      double c2 = Double.parseDouble(num2);

      System.out.println("合計値は" + (c1 + c2));
    } catch (NumberFormatException e) {
      System.out.println("入力値は少数値ではありません");
      e.printStackTrace();
    }
  }
}
