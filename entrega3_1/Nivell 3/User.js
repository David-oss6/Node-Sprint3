const events = require("events");
const eventEmitter = new events.EventEmitter();

class User extends events {
  constructor(x) {
    super();
    this.name = x;
    this.suscripciones = []
  }
  suscribir(tema) {
    this.suscripciones.push({
      listener: eventEmitter.on(tema, () =>
        console.log(`${this.name} escuchó el comentario sobre ${tema}`)
      )
    })
  }
  comentar(tema, comentario) {
    console.log(`${this.name} ha comentando sobre ${tema.tema}: ${comentario}`);
    eventEmitter.emit(tema.tema)
    tema.notificar()
  }
}

module.exports = { User };
