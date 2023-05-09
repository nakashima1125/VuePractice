#260

def shellSort(slist, h)
  while h > 0
    for i in (h+1)..(slist.size) do
      j = i
      tmp = slist[i-1]
      while((j>h) && (slist[j-h-1]>tmp))
        slist[j-1] = slist[j-h-1]
        j = j - h
      end
      slist[j-1] = tmp
    end
    h = h.div(2)
  end
  return slist
end

slist = [6, 3, 7, 0, 8, 1, 9, 5, 2, 4]
h = 2
slist = shellSort(slist, 2)
print(slist)


