// https://www.w3schools.com/nodejs/nodejs_events.asp
const { User } = require("./User.js");
const { Tema } = require("./Tema.js");
const events = require("events");
const eventEmitter = new events.EventEmitter();

const paco = new User("Paco");
const david = new User("David");
const sonia = new User("Sonia");

const geo = new Tema("geografia");
const arque = new Tema("arqueologia");

geo.suscribir(paco);
geo.suscribir(david)

paco.comentar(geo, 'El rio tiene agua')
david.comentar(geo, 'El rio esta frío')



setTimeout(() => {
  arque.suscribir(david);
  arque.suscribir(sonia);
  sonia.comentar(arque, 'Viva Indiana Jones')
  david.comentar(arque, 'La tierra es plana')
}, 3000);


