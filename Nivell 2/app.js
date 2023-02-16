const { Jugador } = require("./Jugador");
const { Juego } = require("./Juego");

const paco = new Jugador("Paco");
const david = new Jugador("David");

const empezarJuego = () => {
  penaltis = new Juego(paco, david);
  console.log(penaltis);
  penaltis.chutar();
};
empezarJuego();
function start() {
  console.log(nuevoJugador);
  nuevoJugador.jugar();
}
