def mdc(n1, n2):
  if (n2 == 0):
    return n1

  mdc(n2, n1 % n2)


mdc(5, 10)