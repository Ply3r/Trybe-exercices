def retornaMaior(primeiro, segundo):
  if (primeiro > segundo):
    return primeiro
  else:
    return segundo
  
  
lista = [9, 5, 6, 8, 4]


def calcularMedia(lista):
  return sum(lista) / len(lista)


def pillarConstructor(n):
  if (n < 1): 
    return
  
  value = ''
  for x in range(n):
    value += ('*' * n) + '\n'
  
  return value


nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def findBiggest(lista):
  biggest_len = 0
  biggest_value = ''
  
  for value in lista:
    if len(value) > biggest_len:
      biggest_len = len(value)
      biggest_value = value

  return biggest_value


def getTotalCans(metros_quadrados):
  total_cans = (metros_quadrados // 3) // 18
  total_price = total_cans * 80
  return (total_cans, total_price)


def checkTriangle(a, b, c):
  if (a == b == c): return "Triângulo Equilátero: três lados iguais;"
  elif (a == b or b == c or c == a): return "Triângulo Isósceles: quaisquer dois lados iguais;"
  else: return "Triângulo Escaleno: três lados diferentes."
  
  
def makePiramide(n):
  result = ''
  
  for x in range(1, n + 1):
    result += ('*' * (n - (n - x))) + '\n'
    
  return result


print(makePiramide(5))