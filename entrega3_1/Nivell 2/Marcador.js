class Marcador {
  static instancia
  constructor(jugadorA, JugadorB, nombre) {
    if (!Marcador.instancia) {
      Marcador.instancia = this
      this.jugadorA = 0
      this.JugadorB = 0
      this.nombre = nombre
      console.log("primera instancia")
    } else {
      let marcadores = []
      console.log("marcador ya existe")
      return Marcador.instancia
    }
  }
}
module.exports = { Marcador }
