# 配列を逆順にする関数
def arrayReverse(ary):
  for left in range(round(len(ary) / 2)):
    right = len(ary) - left - 1
    tmp = ary[right] 
    ary[right] = ary[left]
    ary[left] = tmp
  return ary

if __name__ == "__main__":
  sarray = [1, 2, 3, 4, 5]
  ans = arrayReverse(sarray)
  print(ans)

