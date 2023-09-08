package java_test.B;

import java.util.*;

public class UseArrayList {
  public static void main(String[] args){
    List<String> list = new ArrayList<String>();
    list.add("abc");
    list.add("def");
    list.add("hello");
    list.add("back");

    for (int i = 0; i < list.size(); i++) {
      System.out.println(list.get(i));
    }

    list.remove(2);

    for (String s : list) {
      System.out.println(s);
    }

  }
}
