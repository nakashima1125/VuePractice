# 228

def bsort(sarray):
  for _ in range(len(sarray)-1):
      flag = 1

      for j in range(len(sarray)-1):
          if(sarray[j] > sarray[j+1]):
            flag = 0 # if文を通すならば、不完全なのでflag=1にする。
            tmp = sarray[j]
            sarray[j] = sarray[j+1]
            sarray[j+1] = tmp

      if(flag == 1): # jのfor文内で、一度もif文を通さないならばsortできている。
         return sarray  

if __name__ == "__main__":
    sarray = [2, 1, 4, 9, 7, 5, 8, 4, 6]
    sarray = bsort(sarray)
    print(sarray)
