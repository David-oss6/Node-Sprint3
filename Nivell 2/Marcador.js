class Marcador {
  static instancia;
  constructor(puntos) {
    if (!Marcador.instancia) {
      Marcador.instancia = this;
      this.puntos = puntos;
    }
    console.log("marcador ya esta instanciado");
  }
}
module.exports = { Marcador };
