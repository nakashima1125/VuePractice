package java_test;

public class BookUse {
  public static void main(String[] args) {

    Book[] bb = { new Book("TCP/IP", "吉田", 1000),
                  new Book("SQL", "青木", 1500),
                  new Book("英文法", "石田", 2220), };

    for (Book b : bb) {
      System.out.println("タイトル : " + b.getbookTitle() + "著者 : " + b.getName() + "値段 : " + b.getPrice());
    }

  }
}
