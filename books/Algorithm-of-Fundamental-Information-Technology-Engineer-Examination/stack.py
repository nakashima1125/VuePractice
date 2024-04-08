# p220
top = 0
stack_list = []

def push(value):
  global top, stack_list
  top += 1
  stack_list.append(value)

def pop():
  global top, stack_list
  if(top > 0):
    ret = stack_list[top - 1]
    stack_list[top - 1] = None
    stack_list = list(filter(None, stack_list)) # None部分を削除
  top -= 1
  print("top:", top)
  return ret


if __name__ == "__main__":
    push("1")  
    push("2")
    push("3")  
    push("4")
    pop()
    push("5")
    pop()   
    pop()   
    print(stack_list)


