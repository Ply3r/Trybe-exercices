import json
import csv
import random

def printName(name):
  letters = [letter for letter in name]
  
  while len(letters):
    print(''.join(letters))
    letters.pop()
  

def guessTheWord():
  with open('data/palavras.txt') as file:
    data = file.readlines()
    words = [word.split('\n')[0] for word in data]
  
  right_word = random.choice(words)
  scramble_word = ''.join(random.sample(right_word, len(right_word)))
  
  print(f'A palavra é: {scramble_word}')
  guess_answer = input('Qual é a palavra escolhida?: ')
  
  if (guess_answer == right_word):
    print('Parabéns você acertou')
  else:
    print('Que pena você errou')
    
  
def booksPercentage():
  with open('data/livros.json') as file:
    books_data = json.load(file)
    
  categories = dict()
  for book in books_data:
    book_categories = book['categories']
    
    for categorie in book_categories:
      if (categorie not in categories):
        categories[categorie] = { 'qnt': 0, 'perc': 0 }
        
      categories[categorie]['qnt'] += 1
      categories[categorie]['perc'] = (categories[categorie]['qnt'] * len(book_categories)) / 100
      
  
  with open('data/porcetagem.csv', mode='w') as file:
    writer = csv.writer(file)
    header = ['categoria', 'quantidade', 'porcentagem']
    writer.writerow(header)
    
    for key, value in categories.items():
      writer.writerow([key, value['qnt'], value['perc']])


booksPercentage()