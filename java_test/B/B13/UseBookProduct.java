package java_test;

public class UseBookProduct {
  public static void main(String[] args) {
    BookProduct b = new BookProduct();
    b.bookTitle = "刑事コロンボ";
    b.publisher = "ABC出版";
    b.price = 1400;

    b.showBook();
  }
  
}
