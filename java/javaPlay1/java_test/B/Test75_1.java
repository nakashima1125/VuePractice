package java_test.B;

public class Test75_1 {
  private String shop;
  private String address;
  private double area;
  private Test75_2[] product;

  String getShop() {
    return this.shop;
  }

  String getAddress() {
    return this.address;
  }

  double getArea() {
    return this.area;
  }

  Object getProduct() {
    return this.product;
  }

  Test75_1(String shop, String address, double area) {
    this.shop = shop;
    this.address = address;
    this.area = area;
  }

  // Test75_1(String shop, String address, double area, String productName, int price) {
  //   this.shop = shop;
  //   this.address = address;
  //   this.area = area;
  //   this.product = new Test75_2(String productNmae, int price);
  // }

  void SetProduct(int number, String productName, int price) {
    // this.product = new Test75_2[number];
    for(int i=0; i<=number-1; i++){
      this.product = new Test75_2(productName, price);
    }
  }
}
