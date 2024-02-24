package java_test;

public class BookProduct extends Product {
  String bookTitle;
  String publisher;

  void showBook() {
    System.out.println("タイトル : " + bookTitle);
    System.out.println("出版社 : " + publisher);
    showPrice();
  }
}
