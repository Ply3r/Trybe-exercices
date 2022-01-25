const exercicio1 = (n1, n2, n3) => {
  const allNumber = [n1,n2, n3].every((n) => typeof n === 'number');
  const promise = new Promise((resolve, reject) => {
    if (!allNumber) reject("Informe apenas números");
    const result = (n1 + n2) * n3
    if (result < 50) {
      reject("Valor muito baixo")
    } else {
      resolve(result)
    }
  })
  return promise;
}

module.exports = exercicio1;