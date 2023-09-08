package java_test.B14;

public class UseSmartPhone {
  public static void main(String[] args) {
    SmartPhone s = new SmartPhone("000-1111-1111", "abc@gmail.com");

    s.mail("aaa@gmail.com");
    s.tel("000-9999-1111");
    
    s.play();
    s.stop();
    s.upload();
    s.download();
  }
}
