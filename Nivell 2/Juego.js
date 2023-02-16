const { Marcador } = require("./Marcador");
class Juego {
  constructor(x) {
    this.x = x;
  }
  chutar() {
    console.log("chute!");
    let chute = Math.random() * 1000;
    console.log(`puntos ${chute}`);
    if (chute) {
      let marcador = new Marcador("1-0");
      let marcador2 = new Marcador("23-23");
      console.log(marcador, marcador2);
    }
  }
}

module.exports = { Juego };
