const { Jugador } = require("./Jugador");
const { Juego } = require("./Juego");
const { Marcador } = require("./Marcador")

const paco = new Jugador("Paco");
const david = new Jugador("David");
const marcador = new Marcador(0, 0)

const empezarJuego = () => {
  penaltis = new Juego(paco, david, marcador);
  console.log(penaltis);
  penaltis.chutar();
  setTimeout(() => {
    penaltis.chutar()
  }, [2000])
  setTimeout(() => {
    penaltis.chutar()
  }, [4000])
};
empezarJuego();

