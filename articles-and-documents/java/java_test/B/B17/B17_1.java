package java_test.B17;

import java.util.*;

public class B17_1 {
  public static void main(String[] args){
    List<String> list = new ArrayList<String>();
    list.add("りんご");
    list.add("みかん");
    list.add("メロン");
    list.add("いちご");

    list.remove(2);

    for (int i = 0; i < list.size(); i++) {
      System.out.println(list.get(i));
    }
  }
}
