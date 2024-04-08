# p150
first = 0
last = 0
queue = []

# 追加
def enq(value):
  global first, last, queue
  if(first == 0):
     first = 1
  queue.append(value)
  last += 1

# 取り出し
def deq():
  global first, last, queue
  ret = None
  if(last > 0):
     ret = queue[first-1]
     queue[first-1] = None
     first += 1
  return ret

if __name__ == "__main__":
    v = deq()  
    enq("9")
    enq("8")
    enq("7")
    v = deq()  
    enq("7")
    enq("8")
    v = deq()  
    v = deq()  
    print(queue)
    print("v:", v)

