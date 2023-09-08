// scanを2回使う場合は新規でオブジェクト化して用いないといけない

package java_test.B;
import java.util.*;

public class Test1 {
  public static void main(String[] args) {
    System.out.println("Stringとintのメッセージメソッドを実行します");

    Scanner scan1 = new Scanner(System.in);
    System.out.println("メッセージと出力回数を入力して下さい");
    System.out.print("メッセージ");
    String s1 = scan1.nextLine();
    System.out.print("出力回数");
    int num1 = scan1.nextInt();
    System.out.println(num1 + "回メッセージを出力します。");
    message(s1, num1);

    Scanner scan2 = new Scanner(System.in);
    System.out.println("intとStringのメッセージメソッドを実行します");
    System.out.println("メッセージと出力回数を入力して下さい");
    System.out.print("メッセージ");
    String s2 = scan2.nextLine();
    System.out.print("出力回数");
    int num2 = scan2.nextInt();
    System.out.println(num2 + "回メッセージを出力します。");
    message(num2, s2);

    scan1.close();
    scan2.close();
  }

  public static void message(String s, int num) {
    for (int i = 0; i <= num - 1; i++) {
      System.out.println(s);
    }
  }
    public static void message(int num, String s) {
      for (int i = 0; i <= num - 1; i++) {
        System.out.println(s);
      }
    }
}
