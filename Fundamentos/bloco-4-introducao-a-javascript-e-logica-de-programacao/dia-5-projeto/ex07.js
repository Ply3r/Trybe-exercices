function catAndMouse(mouse, cat1, cat2) {
  return  mouse - cat1 <= mouse - cat2? (
    mouse - cat1 == mouse - cat2 ? 'os gatos trombam e o rato foge' : 'cat1'
  ) : 'cat2'
}


console.log(catAndMouse(12, 6, 6))