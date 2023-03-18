class Marcador {
  static instancia
  marcadores = []

  constructor() {
    if (!Marcador.instancia) {
      Marcador.instancia = this
    } else {
      return Marcador.instancia
    }
  }
  puntuar(puntoA, puntoB, nombreJuego) {
    let exist = this.marcadores.find((ele, i) => {
      if (ele.juego === nombreJuego) {
        return { ele, i }
      }
    })
    if (exist === undefined) {
      this.marcadores.push({
        juego: nombreJuego,
        playerA: puntoA,
        playerB: puntoB
      })
    } else {
      let newScore = {
        juego: exist.juego,
        playerA: exist.playerA + puntoA,
        playerB: exist.playerB + puntoB
      }
      this.marcadores.splice(exist.i, 1)
      this.marcadores.push(newScore)
    }


    console.log("fin puntuar:::", this.marcadores)
  }
  mostrarPuntuacion() {

  }
}
module.exports = { Marcador }
