package java_test.B13;

public class Point {
  private int xPoint;
  private int yPoint;

  Point(int xPoint, int yPoint) {
    this.xPoint = xPoint;
    this.yPoint = yPoint;
  }

  void ShowPoint() {
    System.out.println("x座標 : " + this.xPoint);
    System.out.println("y座標 : " + this.yPoint);
  }
}
