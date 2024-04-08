def insert_sort(slist)
  for i in 1..(slist.size-1) do
    j = i # jは未整列の先頭部分
    tmp = slist[i] 
    while ((j > 1) && (slist[j-1] > tmp)) do
      # tmpより小さい値が出るまで、値を横にずらす
      slist[j] = slist[j-1]
      j = j - 1
    end
    # tmpより小さい部分の右側へ代入
    slist[j] = tmp
  end
  return slist
end

slist = [1, 4, 6, 2, 8, 2, 5, 3]
slist = insert_sort(slist)
print(slist)
