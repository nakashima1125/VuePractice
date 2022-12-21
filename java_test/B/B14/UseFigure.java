package java_test.B14;

public class UseFigure {
  public static void main(String[] args) {
    Figure[] f = {new Circle(3.14, 3),
                  new Square(10),
                  new Triangle(3, 5) };
                  

    for (int i = 0; i <= f.length - 1; i++) {
      System.out.println("図形" + i + "の面積：" + f[i].calArea());
    }
  }
}
