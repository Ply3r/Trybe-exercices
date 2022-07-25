def revert(arr, pos, new_arr):
  if pos < 0:
    return new_arr

  new_arr.append(arr[pos])
  return revert(arr, pos - 1, new_arr)

def reverse_list(arr):
  new_arr = []
  return revert(arr, len(arr) - 1, new_arr)

test = reverse_list([1,2,3,4])
print(test)