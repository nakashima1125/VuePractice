package java_test.B14;

public class SmartPhone extends HandyPhone implements Audio, Remotable {
  
  public void play() {
    System.out.println("スマートフォンで音楽を鳴らします");
  }

  public void stop() {
    System.out.println("スマートフォンで音楽を停止します");
  }

  public void upload() {
    System.out.println("スマートフォンで音楽をアップロードします");
  }

  public void download() {
    System.out.println("スマートフォンで音楽をダウンロードします");
  }

  SmartPhone(String no, String mailAddress) {
    super(no, mailAddress);
  }
  
}
