const { Jugador } = require("./Jugador")
const { Juego } = require("./Juego")
const { Marcador } = require("./Marcador")
const marcador = new Marcador
const paco = new Jugador("Paco")
const david = new Jugador("David")
const sonia = new Jugador("Sonia")
const maripili = new Jugador("Maripili")

const empezarJuego = () => {
  const penaltis = new Juego(paco, david, "juego Paco y David")
  const juego2 = new Juego(sonia, maripili, "juego Sonia y Maripili")

  penaltis.chutar()
  juego2.chutar()
  setTimeout(() => {
    penaltis.chutar()
    juego2.chutar()
  }, [2000])
  setTimeout(() => {
    penaltis.chutar()
    // juego2.chutar()
    marcador.mostrarPuntuacion()
  }, [4000])
}
empezarJuego()
