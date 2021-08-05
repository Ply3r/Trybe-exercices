function listaTech(arr, name) {
  let result = []
  arr.sort()
  arr.forEach(e => {
    let obj = {tech: e, name: name}
    result.push(obj)
  })
  return result == '' ? 'Vazio!' : result
}


console.log(listaTech(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas" ))