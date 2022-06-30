import functools

def printarNome():
  nome = input("Digite seu nome: ")

  for letra in nome:
    print(letra)
  

def calcularNumeros():
  numeros = []
  answer = True
  while answer:
    try:
      numero = int(input("Digite um número: "))
      numeros.append(numero)
    except ValueError:
      print(f"Erro ao somar valores, é um valor inválido")
    
    restart = input("Deseja continuar? (s/n): ")
    if (restart == "n"):
      answer = False
  
  if (not len(numeros)):
    return 0
      
  return functools.reduce(lambda a,b: a + b, numeros)
      
      
print(calcularNumeros())