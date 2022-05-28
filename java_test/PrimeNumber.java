package java_test;
import java.util.*;

public class PrimeNumber {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    System.out.println("数値を入力して下さい");

    int num = scan.nextInt();

    if (num < 2) {
      System.out.println("素数ではありません");
    }

    for (int i = 2; i <= num; i++) {
      if (num % i == 0) {
        System.out.println("素数ではありません");
        break;
      } else {
        System.out.println("素数です");
        break;
      }
    }
  }
}
