class SeqIdMaker {
  constructor() {
    if (SeqIdMaker.instence) {
      return SeqIdMaker.instence
    }
    this.id = 0
    SeqIdMaker.instence = this
  }
  setId(newVal) {
    if (typeof newVal === 'number') {
      this.id = newVal
    }
  }
  incId() {
    this.id++
  }
}

module.exports = new SeqIdMaker()
