// https://www.w3schools.com/nodejs/nodejs_events.asp
const { User } = require("./User.js");
const { Tema } = require("./Tema.js");
const events = require("events");
const eventEmitter = new events.EventEmitter();

const paco = new User("Paco");
const david = new User("David");

const geoSubscribers = [david, paco];
const geo = new Tema("geografia");

geo.subscribir(paco);
geo.subscribir(david);

geo.comentar("David", "La luna esta lejos");
geo.comentar("Paco", "No lo sabía");
// david.subscribirse(geo);
// console.log(david);
