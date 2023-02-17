class Marcador {
  static instancia;
  constructor(puntoPaco, puntoDavid) {
    if (!Marcador.instancia) {
      Marcador.instancia = this;
      this.paco = puntoPaco
      this.david = puntoDavid
      console.log("primera instancia")
    } else {
      console.log("marcador ya existe")
      return Marcador.instancia
    }

  }
}
module.exports = { Marcador };
