'''
root : 根 ※配列の先頭
left : 根の左ノード
right : 根の右ノード
bottom : 葉
'''

def heap(slist, root, bottom):  
  # ルートの左下の子ノード
  left = root * 2
  # ルートの右下の子ノード
  right = root * 2 + 1

  # rootと左右のノード部分だけで最大値の値を探す。
  if (left <= bottom) and (slist[left] > slist[root]):
    max = left
  else:
    max = root

  if right <= bottom and slist[right] > slist[root]:
    max = right
  
  if max != root:

    # 最大値(右ノードか左ノードかのいずれか)をroot部分と入れ替える。
    tmp = slist[root]
    slist[root] = slist[max] 
    slist[max] = tmp

    # 最大値がrootに来るまで再帰処理
    slist = heap(slist, max, bottom)

  return slist 


def heap_sort(slist):
  # 後ろから順に処理していく。
  for i in reversed(range(len(slist))):
    print(slist)
    
    # 先頭と後ろを入れ替える（rootと配列のi部分を入れ替える）
    tmp = slist[0]
    slist[0] = slist[i]
    slist[i] = tmp
    ans = heap(slist, 0, i-1)

  return ans

if __name__ == "__main__":
    sample_list = [10, 8, 4, 1, 7]
    ans = heap_sort(sample_list)
    # print(ans)


