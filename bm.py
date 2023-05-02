# BM法はoyer-Moore法と呼ばれ、パターン文字列を後ろから比較することで、比較が間違いなら一気にパターン文字列分だけずらせる効率的な探索法である。
# 前から比較する手法では、比較がダメなら1個後ろにずらして比較するが、BM法なら比較がダメなら、文字列分後ろにずらして比較する。

def bm_search(hikaku, patern):
  skip = []
  # ずらし表の作成
  for _ in range(len(hikaku)+10):
    skip.append(len(patern))
  
  for s in range(len(patern)-1):
    skip[patern.index(patern[s])] = len(patern) - s
  
  cnt = len(patern) 

  while(cnt < len(hikaku)-1):
    start = cnt
    for j in reversed(range(len(patern))):
      # paternの末尾とhikakuのpaternの要素数目の場所を比較
      if(hikaku[cnt] != patern[j]):
        # 横にずらす
        cnt = start + skip[hikaku.index(hikaku[cnt])]
        match = False
        print(cnt)
        break
      else:
        match = True
      cnt = cnt - 1
    if(match):
      return cnt 
  return -1

if __name__ == "__main__":
  compared_list = ["A", "B", "A", "B", "C", "D", "A", "B", "A", "B", "C"]
  patern = ["A", "B", "A", "B", "C"]
  ans = bm_search(compared_list, patern)
  print(ans)
