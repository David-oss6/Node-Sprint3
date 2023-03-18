const { Marcador } = require("./Marcador")

class Juego {
  constructor(x, y, nombre) {
    this.x = x
    this.y = y
    this.nombreJuego = nombre
    this.marcador = new Marcador()
  }
  chutar() {
    let chuteX = Math.floor(Math.random() * 300)
    let chuteY = Math.floor(Math.random() * 300)
    // console.log(`${this.x.nombre} chuta! Distancia: ${chuteX} metros`)
    // console.log(`${this.y.nombre} chuta! Distancia: ${chuteY} metros`)

    chuteX > chuteY ? this.marcador.puntuar(1, 0, this.nombreJuego) : this.marcador.puntuar(0, 1, this.nombreJuego)

  }
}

module.exports = { Juego }
