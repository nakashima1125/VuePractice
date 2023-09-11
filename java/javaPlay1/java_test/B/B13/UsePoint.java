package java_test.B13;

public class UsePoint {
  public static void main(String[] args) {
    Point[] cp = {new Point(3, 9),
                  new ColorPoint(12, -3, "RED"),
                  new Point(56, 2),
                  new ColorPoint(7, -28, "BLUE")};
                       
    for (Point p : cp) {
      p.ShowPoint();
      System.out.println("");
    }
  }
}
