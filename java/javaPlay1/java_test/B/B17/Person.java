package java_test.B17;

public class Person {
  private String name;

  public String getName(String name) {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Person(String name) {
    this.name = name;
  }

  public void intro() {
    System.out.println("私は" + name + "と申します");
  }
  
}
