'''
引数に指定した値を探索し、一致する要素番号を配列で返す
'''

def linear_search(slist, val):  
    for i in range(len(slist)):
        if(slist[i] == val):
            return i
    return -1

def search_list(slist, val):
    index = linear_search(slist, val)
    ret = []
    i, j = 0, 0
    while(index >= 0):
        if(len(ret)==0):
          ret.append(index)
        else:
          ret.append(index + ret[j-1] + 1)       
        tmp = []
        for i in range(ret[-1]+1, len(slist)):
          tmp.append(slist[i])
        index = linear_search(tmp, val) 
        j += 1
    return ret 

if __name__ == "__main__":
    slist = [2, 3, 4, 4, 1, 4, 5, 4]
    val = 4
    ret = search_list(slist, val)
    print(ret)
