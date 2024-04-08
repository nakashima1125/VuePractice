# 単方向リスト
# イメージとしては、ListElementを用いてNodeを繋げていく感じ。

class Node: 
  # コンストラクタ
  def __init__(self ,val): 
    self.val = val
    self.next = None  

class ListElement:
  # コンストラクタ
  def __init__(self):  
    self.head = None

  def append(self, qval): 
    # インスタンス作成し代入。メンバ変数valを初期化。
    curr = Node(qval) 

    if self.head is None: 
      # headが未定義なら先頭となるノードを代入
      self.head = curr
    else:
      # すでに先頭ノードがあるなら、先頭ノードをprevへ入れる。
      prev = self.head 
    
      # 先頭のNodeの次が存在し続ける限り
      while prev.next: 

      # 一番後方のNodeをprevへ代入する。 
        prev = prev.next

      # 一番後方のノードのnextに最新の文字をメンバ変数で持つノードを代入する。
      prev.next =  curr
  
  def printList(self):
    # 先頭のインスタンスを代入
    temp = self.head 

    # 先頭から最後のクラスまで参照し値を導出
    while temp: 
      print(temp.val) 
      temp = temp.next

if __name__ == "__main__":
  qval = ["a", "b", "c"]
  le = ListElement()
  for s in qval:
    # append関数を追加したい分だけ実行する
    le.append(s)

  le.printList()



