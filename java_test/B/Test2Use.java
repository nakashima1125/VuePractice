package java_test.B;
import java.util.*;

public class Test2Use {
  public static void main(String[] args) {
    Scanner scan1 = new Scanner(System.in);
    Scanner scan2 = new Scanner(System.in);

    System.out.print("名前の初期値を入力して下さい:");
    String s = scan1.nextLine();

    System.out.print("年齢の初期値を入力して下さい:");
    int num = scan2.nextInt();

    System.out.println("クラスの初期値をします");
    Test2 u = new Test2(s, num);
    System.out.println(u.name + "さんの年齢は" + u.age + "歳です");
  }
}
