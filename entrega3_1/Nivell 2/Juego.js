const { Marcador } = require("./Marcador")

class Juego {
  constructor(x, y, nombre) {
    this.x = x
    this.y = y
    this.juego = nombre
    this.marcador = new Marcador(this.x, this.y, nombre)
    console.log("marcador:::", this.marcador)
  }
  chutar() {
    let chuteX = Math.floor(Math.random() * 300)
    let chuteY = Math.floor(Math.random() * 300)
    console.log(`${this.x.nombre} chuta! Distancia: ${chuteX} metros`)
    console.log(`${this.y.nombre}! Distancia: ${chuteY} metros`)

    if (chuteX > chuteY) {
      this.marcador = {
        ...this.marcador,
        jugadorA: this.marcador.jugadorA + 1,
      }
      console.log(`punto para: ${this.x.nombre}`)
    } else {
      this.marcador = {
        ...this.marcador,
        JugadorB: this.marcador.JugadorB + 1,
      }
      console.log(`punto para: ${this.x.nombre}`)
    }
    console.log(
      `*** Resultado: ${this.marcador.jugadorA} - ${this.marcador.JugadorB} *** `
    )
    console.log("MARCADOR", this.marcador)
  }
}

module.exports = { Juego }
