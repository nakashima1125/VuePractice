package java_test.B17;

import java.util.*;

public class B17_2 {
  public static void main(String[] args) {
    Map<String, Person> map = new HashMap<String, Person>();
    map.put("A13", new Person("木村"));
    map.put("A12", new Person("山田"));
    map.put("A14", new Person("田中"));

    Set<String> keys = map.keySet();

    for (String key : keys) {
      System.out.println("社員番号" + key);
      Person p = new Person(key);
      p.intro();
    }
  }
}
