function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA ? true : false
}


console.log(triangleCheck(2, 14 ,8))