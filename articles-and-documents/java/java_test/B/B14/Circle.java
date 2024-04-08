package java_test.B14;

public class Circle extends Figure{
  private double pi;
  private int radius;

  Circle(double pi, int radius) {
    this.pi = pi;
    this.radius = radius;
  }

  int calArea() {
    return (int) this.pi * (radius * radius);
  }  
}
