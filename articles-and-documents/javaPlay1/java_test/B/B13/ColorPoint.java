package java_test.B13;

public class ColorPoint extends Point{
  private String color;
  
  ColorPoint(int xPoint, int yPoint, String color) {
    super(xPoint, yPoint);
    this.color = color;
  }

  void ShowPoint() {
    super.ShowPoint();
    System.out.println("color : " + color);
  }
}
