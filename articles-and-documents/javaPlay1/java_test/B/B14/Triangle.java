package java_test.B14;

public class Triangle extends Figure {
  private int bottom;
  private int height;

  Triangle(int bottom, int height) {
    this.bottom = bottom;
    this.height = height;
  }

  int calArea() {
    return (int) (bottom * height * 0.5);
  }
}
