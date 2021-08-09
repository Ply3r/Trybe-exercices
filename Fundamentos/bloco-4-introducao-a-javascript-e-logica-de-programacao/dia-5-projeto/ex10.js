function listaTech(list, name) {
  let result = []
  list.sort()
  list.forEach(e => {
    let obj = {tech: e, name: name}
    result.push(obj)
  })
  return result == '' ? 'Vazio!' : result
}


console.log(listaTech(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas" ))