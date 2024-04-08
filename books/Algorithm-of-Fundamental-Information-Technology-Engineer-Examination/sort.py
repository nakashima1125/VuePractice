# p220
# 昇順へ並び替え

def sort(slist):
    for i in range(len(slist)):
        min = i

        # 最小値を探す
        for j in range(i+1, len(slist)):
            if(slist[j] < slist[min]):
                min = j
        
        # 最小値とiの場所を入れ替え
        tmp = slist[i]
        slist[i] = slist[min]
        slist[min] = tmp

    return slist                

if __name__ == "__main__":
    slist = [2, 1, 4, 9, 7, 5, 8, 4, 6]
    slist = sort(slist)
    print(slist)


