class Juego {
  constructor(x, y, marcador) {
    this.x = x;
    this.y = y;
    this.marcador = marcador
  }
  chutar() {
    console.log(`${this.x.nombre} chuta!!!`);
    let chuteX = Math.floor(Math.random() * 300)
    console.log(`distancia: ${chuteX} metros`);
    console.log(`${this.y.nombre} chuta!!!`)
    let chuteY = Math.floor(Math.random() * 300)
    console.log(`distancia: ${chuteY} metros`)

    if (chuteX > chuteY) {
      this.marcador = {
        ...this.marcador, paco: this.marcador.paco + 1
      }
      console.log(`punto para: ${this.x.nombre}`)
    } else {
      this.marcador = {
        ...this.marcador, david: this.marcador.david + 1
      }
      console.log(`punto para: ${this.x.nombre}`)

    }
    console.log(`*** Resultado: ${this.marcador.paco} - ${this.marcador.david} *** `)
  }
}

module.exports = { Juego };
