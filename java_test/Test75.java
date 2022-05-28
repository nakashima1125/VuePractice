package java_test;

public class Test75 {
  private String shop;
  String address;
  double area;

  String getShop() {
    return shop;
  }
  
  Test75(String shop) {
    this.shop = shop;
  }
  void Output(){
    System.out.println(this.shop + "の住所は" + this.address + "で、面積は" + this.area + "です。");
  }
}
