const events = require("events");
const eventEmitter = new events.EventEmitter();

class User {
  constructor(x) {
    this.name = x;
    this.subscripciones = [];
  }
  subscribirse(tema) {
    this.subscripciones.push(tema);
    eventEmitter.on(`${tema}`, () =>
      console.log(`${this.name} esta escuchando sobre ${tema.tema}`)
    );
  }
}

module.exports = { User };
