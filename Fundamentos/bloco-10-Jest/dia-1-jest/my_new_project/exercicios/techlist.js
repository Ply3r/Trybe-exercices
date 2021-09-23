function techList(arr = [], name) {
  if (!arr.length) return 'Vazio!'
  arr = arr.sort()
  return arr.map((tech) => ({tech, name}) )
}

module.exports = { techList }
