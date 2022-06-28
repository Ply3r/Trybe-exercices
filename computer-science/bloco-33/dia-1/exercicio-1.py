import functools

trybe_course = ["Introdução", "Front-end", "Back-end"]
trybe_course.append("Ciência da Computação" )

trybe_course[0] = "Fundamentos"

var = set()
var.add("Leandrex")

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = True
del info["origem"]

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]


def getAandB(item):
  return item["name"][-1] == "A" or item["name"][-1] == "D"


newRestaurants = [restaurant for restaurant in restaurants if getAandB(restaurant)]


def calculateFactorial(factorial):
  return functools.reduce(lambda a, b: a * b, [x for x in range(1, factorial + 1)])


ratings = [6, 8, 5, 9, 10]
newRatings = [number * 10 for number in ratings]

for rating in ratings:
  if rating % 3 == 0:
    print(f'{rating} é multiplo de 3')
    

meu_dict = { 123: "um dois tres", "chave": "valor" }
print(meu_dict)
