const events = require('events');
const emitter = new events.EventEmitter();
function escuchar(usuari, tema) {
    console.log(`${usuari} esta escuchando sobre el tema ${tema}`)
}
class Tema extends events {
    constructor(tema, usuari) {
        super()
        this.tema = tema
        console.log(`se ha creado el tema ${tema.toUpperCase()}`)
        this.usuaris = []
        this.usuaris.push(usuari)

    }

    subscribirse() {
        this.usuaris.forEach(usu => {
            usu.prototype.subscribe =
                usu.on(`${this.tema}`, escuchar())
        });
    }
    comentar() {
        this.usuari.emitter.emit(`${this.tema}`)
        console.log(`${this.usuari} esta comentando sobre este tema`)
    }
    escuchar() {
        console.log(`${this.usuari} esta escuchando sobre el tema ${this.tema}`)
    }

}


module.exports = { Tema }