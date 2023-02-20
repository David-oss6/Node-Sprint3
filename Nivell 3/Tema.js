const { User } = require("./User");
const events = require("events");
const eventEmitter = new events.EventEmitter();

class Tema {
  constructor(tema) {
    this.tema = tema;
    this.usuaris = [];
    eventEmitter.on("geografia", () => {
      console.log(`Tema: se esta hablando de ${this.tema}`);
      this.usuaris.forEach((usu) => {
        console.log(`${usu.name} esta escuchando un comentario de geografia`);
      });
    });
  }
  subscribir(x) {
    this.usuaris.push(x);
    console.log(`${x.name} se ha suscrito a ${this.tema.toUpperCase()}`);
  }
  comentar(x, y) {
    console.log(`${x} ha comentando sobre geografia: ${y}`);
    eventEmitter.emit("geografia");
  }

  escuchar() {
    eventEmitter.on("geografia", () =>
      this.usuaris.forEach((usu) => {
        console.log(`${usu.name} esta escuchando un comentario de geografia`);
      })
    );
  }
}

module.exports = { Tema };
