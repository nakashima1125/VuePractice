package java_test;
import java.util.*;

public class Test75Use {
  public static void main(String[] args) {

    System.out.println("shopクラスのインスタンスを作成します");
    Test75_1 t1 = new Test75_1("Fマート", "東京都新宿", 120);
    Test75_1 t2 = new Test75_1("apマート", "神奈川県横浜", 100);

    System.out.println(t1.getShop() + t1.getAddress() + "の売り場面積は" + t1.getArea() + "です。");
    System.out.println(t2.getShop() + t2.getAddress() + "の売り場面積は" + t2.getArea() + "です。");

    System.out.println("Fマートで仕入れる商品の数を入力してください");
    Scanner scan1 = new Scanner(System.in);
    int num1 = scan1.nextInt();

    System.out.println("apマートで仕入れる商品の数を入力してください");
    Scanner scan2 = new Scanner(System.in);
    int num2 = scan2.nextInt();

    t1.SetProduct(num1, "お茶", 100);
    t2.SetProduct(num2, "お菓子", 500);

    System.out.println(t1.getProduct());

    // System.out.println(t1.getShop() + "で販売している" + t1.getProduct() + "の在庫は" + t1.getProduct());
    // System.out.println(t2.getShop() + "で販売している" + t2);

    scan1.close();
    scan2.close();
  }
}
