file = open('data/alunos.txt', mode='r')
alunos = file.readlines()
reprovados = []
file.close()

for aluno in alunos:
  nome, media = aluno.split(' ')
  if (int(media) < 6):
    reprovados.append(nome)
    
file = open('data/reprovados.txt', mode='w')
file.writelines([reprovado + '\n' for reprovado in reprovados])
file.close()