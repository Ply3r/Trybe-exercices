const skills = ['JavaScript', 'Python', 'Sass/Scss', 'HTML/CSS', 'jQuery']
function concatenate(str, arr) {
  arr = arr.sort()
  let result = `${str} Minhas cinco principais habilidades são: \n`
  arr.forEach(e => result += e + '\n')
  return result
}


console.log(concatenate('dj Azeitona', skills))