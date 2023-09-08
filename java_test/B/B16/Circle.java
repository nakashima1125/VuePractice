package java_test.B16;

public class Circle {
  public static final double PI = 3.14;
  private double radius;

  public Circle(double radius) throws InvalidException {
    if (radius <= 0) {
      throw new InvalidException("半径が0以下です");
    }
    this.radius = radius;
  }
  
  public double area() {
    return radius * radius * PI;
  }
}

