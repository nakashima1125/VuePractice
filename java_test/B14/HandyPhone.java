package java_test.B14;

public class HandyPhone extends Phone{
  private String mailAddress;

  public String getMailAddress() {
    return this.mailAddress;
  }

  public void setMailAddress(String mailAddress) {
    this.mailAddress = mailAddress;
  }

  public void mail(String to) {
    System.out.println(mailAddress + "から" + to + "へメールしました");
  }
  
  public void info() {
    System.out.println("電話番号=" + getNo() + "メールアドレス=" + this.mailAddress);
  }

  HandyPhone(String no, String mailAddress) {
    super(no);
    this.mailAddress = mailAddress;
  }

}
