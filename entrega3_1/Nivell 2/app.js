const { Jugador } = require("./Jugador")
const { Juego } = require("./Juego")
const { Marcador } = require("./Marcador")

const paco = new Jugador("Paco")
const david = new Jugador("David")
const sonia = new Jugador("Sonia")
const maripili = new Jugador("Maripili")

const empezarJuego = () => {
  const penaltis = new Juego(paco, david, "juego1")
  const juego2 = new Juego(sonia, maripili, "juego2")

  penaltis.chutar()
  juego2.chutar()
  setTimeout(() => {
    penaltis.chutar()
    juego2.chutar()
  }, [2000])
  setTimeout(() => {
    penaltis.chutar()
    juego2.chutar()
  }, [4000])
}
empezarJuego()
