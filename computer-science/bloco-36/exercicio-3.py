def checkArray(arr, max_num, position):
    if position == len(arr):
      return max_num

    number = arr[position]
    if number > max_num:
      max_num = number

    return checkArray(arr, max_num, position + 1)


def find_biggest_num(arr):
  return checkArray(arr, 0, 0)


teste = find_biggest_num([55,4,10,3,5,7,22])  
print(teste)