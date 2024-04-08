# 212
def recursive(var1, var2):
    var2 +=1
    var1 = var1 + var2
    if(var2 >= 10):
      return var1
    else:
      return recursive(var1, var2)
      
if __name__ == "__main__":
  ret = recursive(0, 0)
  print(ret)
