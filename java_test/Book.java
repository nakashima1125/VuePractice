package java_test;

public class Book {
  private String bookTitle;
  private String name;
  private int price;

  void showBook()  {
    System.out.println(this.bookTitle + "の著者は" + this.name + "で値段は" + price);
  }
  
  void setbooktTitile(String bookTitle) {
    this.bookTitle = bookTitle;
  }

  void setName(String name){
    this.name = name;
  }

  void setPrice(int price){ 
    this.price = price;
  }
  
  String getbookTitle() {
    return bookTitle;
  }

  String getName(){
    return name;
  }

  int getPrice(){
    return price;
  }
 
  Book(String bookTitle, String name, int price){
    this.bookTitle = bookTitle;
    this.name = name;
    this.price = price;
  }
}
