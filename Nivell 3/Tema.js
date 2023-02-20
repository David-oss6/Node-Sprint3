const { User } = require("./User");
const events = require("events");
const eventEmitter = new events.EventEmitter();

class Tema {
  constructor(tema) {
    this.tema = tema;
    this.usuaris = [];
    eventEmitter.on("geografia", () => {
      console.log(`Tema: se esta hablando de ${this.tema}`);
    });
  }
  subscribir(x) {
    this.usuaris.push(x);
    x = {
      ...x,
      listener: eventEmitter.on("geografia", () =>
        console.log(`${x.name} escuchó el comentario sobre ${this.tema}`)
      ),
    };
    console.log(`${x.name} se ha suscrito a ${this.tema.toUpperCase()}`);
  }
  comentar(x, y) {
    console.log(`${x.name} ha comentando sobre ${this.tema}: ${y}`);
    eventEmitter.emit("geografia");
  }
}

module.exports = { Tema };
