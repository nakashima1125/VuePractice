def heap(slist, root, bottom):
  # ルートの左下の子ノード
  left = root * 2

  # ルートの右下の子ノード
  right = root * 2 + 1
  
  if (left <= bottom) and (slist[left] > slist[root]):
    max = left
  else:
    max = root

  if right <= bottom and slist[right] > slist[root]:
    max = right
  
  if max != root:
    tmp = slist[root]
    slist[root] = slist[max] 
    slist[max] = tmp

    slist = heap(slist, max, bottom)

  return slist 

def heap_sort(slist):
  for i in reversed(range(len(slist))):
    tmp = slist[0]
    slist[0] = slist[i]
    slist[i] = tmp

    ans = heap(slist, 0, i-1)

  return ans

if __name__ == "__main__":
    sample_list = [10, 8, 4, 1, 7]
    ans = heap_sort(sample_list)
    print(ans)
