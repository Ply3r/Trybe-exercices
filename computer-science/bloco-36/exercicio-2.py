def contar(n):

  def addOne(num):
    if num > n:
        return

    print(num)
    addOne(num + 1)
  
  addOne(1)


contar(5)