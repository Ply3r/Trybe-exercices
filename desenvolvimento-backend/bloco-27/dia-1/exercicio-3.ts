type StudentType = {
  name: string
  matricula: string
  notaProvas: number[]
  notaTrabalhos: number[]
}

class Student {
  private _name: string
  private _matricula: string
  private _notaProvas: number[]
  private _notaTrabalhos: number[]
  
  constructor(params: StudentType) {
    this._name = params.name;
    this._matricula = params.matricula;
    this._notaProvas = params.notaProvas;
    this._notaTrabalhos = params.notaTrabalhos;
  }

  get allNotes() {
    return { provas: this._notaProvas, trabalhos: this._notaTrabalhos }
  }

  get media() {
    const lenProv = this._notaProvas.length;
    const sumProv = this._notaProvas.reduce((acc, curr) => acc + curr);

    const lenTrab = this._notaTrabalhos.length;
    const sumTrab = this._notaTrabalhos.reduce((acc, curr) => acc + curr);

    const mediaProv = Math.round(sumProv / lenProv)
    const mediaTrab = Math.round(sumTrab / lenTrab)

    return Math.round((mediaProv + mediaTrab) / 2)
  }
}

const Leandrex = new Student({ 
  name: 'Leandrex', 
  matricula: 'ENG. Software', 
  notaProvas: [10, 10, 10, 10], 
  notaTrabalhos: [10, 10]
});

console.log(Leandrex.media)
console.log(Leandrex.allNotes)