package java_test.B14;

public class Square extends Figure {
  private int line;

  Square(int line) {
    this.line = line;
  }

  int calArea() {
    return  line * line;
  }
}
