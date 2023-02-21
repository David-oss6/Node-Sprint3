// https://www.w3schools.com/nodejs/nodejs_events.asp
const { User } = require("./User.js");
const { Tema } = require("./Tema.js");
const events = require("events");
const eventEmitter = new events.EventEmitter();

const paco = new User("Paco");
const david = new User("David");
const sonia = new User("Sonia");

const geoSubscribers = [david, paco];
const geo = new Tema("geografia");

geo.subscribir(paco);
geo.subscribir(david);

setTimeout(() => {
  geo.comentar(david, "La luna esta lejos");
}, 1000);
setTimeout(() => {
  geo.comentar(paco, "No lo sabía");
}, 2000);

setTimeout(() => {
  const arque = new Tema("arqueologia");
  arque.subscribir(david);
  arque.comentar(david, "Indiana Jones es lo más");
}, 4000);
