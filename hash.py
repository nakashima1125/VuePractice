# 316

def hash(val):
    return (val % 10) 

def hash_store(slist, val):
    index = hash(val)
    while(slist[index] != None):
        index += 1
    slist[index] = val
    return slist

def hash_search(slist, val):
    index = hash(val)
    while((slist[index] == val) and (index <= len(slist))):
      if(slist[index] == val):
        return index
      else:
        index += 1
    return -1

if __name__ == "__main__":
    slist_size = 10
    slist = [None] * slist_size
    slist = hash_store(slist, 10)
    slist = hash_store(slist, 12)
    slist = hash_store(slist, 20)
    slist = hash_store(slist, 43)
    slist = hash_store(slist, 43)
    slist = hash_store(slist, 56)
    slist = hash_store(slist, 67)
    slist = hash_store(slist, 100)
    print(slist)
    print(hash_search(slist, 67))
    
