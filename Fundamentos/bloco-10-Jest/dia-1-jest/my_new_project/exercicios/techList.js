function techList(arr, name) {
  arr.sort()
  return arr.map(e => {
    const obj = { tech: e, name: name }
    return obj
  })
}

module.exports = techList