const events = require("events");
const eventEmitter = new events.EventEmitter();

class Tema extends events {
  constructor(tema) {
    super()
    this.tema = tema;
    // eventEmitter.on(tema, () => {
    //   console.log(`Tema: se esta hablando de ${this.tema}`);
    // })
  }
  suscribir(user) {

    console.log(`${user.name} se ha suscrito a ${this.tema.toUpperCase()}`);
    user.suscribir(this.tema)
  }
  notificar() {
    console.log(`TEMA: Se está hablando de ${this.tema}`)
  }
}

module.exports = { Tema };
