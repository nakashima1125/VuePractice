package java_test;
import java.util.*;

public class Test3Use {
  public static void main(String[] args) {
    Scanner scan1 = new Scanner(System.in);
    Scanner scan2 = new Scanner(System.in);

    System.out.print("名前の初期値を入力して下さい:");
    String s = scan1.nextLine();

    System.out.print("年齢の初期値を入力して下さい:");
    int num = scan2.nextInt();

    System.out.println("クラスの初期値をします");
    Test3 u = new Test3();
    System.out.println(u.name + "さんの年齢は" + u.age + "歳です");

    System.out.println("クラスの初期化を引数なしで行います");
    Test3 u1 = new Test3();
    System.out.println(u1.name + "さんの年齢は" + u1.age + "歳です");
  }
}
