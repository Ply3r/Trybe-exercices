const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addKeyValue = (obj, key, value) => obj[key] = value;
addKeyValue(lesson2, 'turno', 'manhã')

const listKeys = obj => {
  let arr = Object.keys(obj)
  arr.forEach(e => console.log(e))
}

const getSizeObj = obj => Object.keys(obj).length

const listValues = obj => {
  let arr = Object.values(obj)
  arr.forEach(e => console.log(e))
}

function makeAllLessons() {
  let allLessons = {lesson1: {...lesson1}, lesson2: {...lesson2}, lesson3: {...lesson3}}
  return allLessons
}
const allLessons = makeAllLessons()

function getTotalStudents(obj) {
  let arrayObjs = Object.values(obj)
  let total = 0
  arrayObjs.forEach(e => total += e.numeroEstudantes)
  return total
}

const getValueByNumber = (obj, index) => Object.values(obj)[index]

const verification = (obj, key, value) => Object.keys(obj).indexOf(key) === Object.values(obj).indexOf(value) ? true : false

function getMathStudents(obj) {
  let arr = Object.values(obj)
  let numTotal = 0
  arr.forEach(e => {
    Object.values(e).includes('Matemática') ? numTotal += e.numeroEstudantes : ''
  })
  return numTotal
}

function createReport(obj, name) {
  let arr = Object.values(obj)
  const classes = []
  let students = 0
  arr.forEach(e => {
    Object.values(e).includes(name) ? (
      classes.push(e.materia),
      students += e.numeroEstudantes
    ) : ''
  })
  return {professor: name, aulas: classes, estudantes: students}
}

console.log(createReport(allLessons, 'Carlos'))