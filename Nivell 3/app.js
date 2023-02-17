// https://www.w3schools.com/nodejs/nodejs_events.asp
const { User } = require("./User.js")
const { Tema } = require("./Tema.js")
const EventEmitter = require('events');

const paco = new User("Paco")
let david = new User("David")

const geoSubscribers = [david, paco]
const geo = new Tema("geografia", geoSubscribers)
david = new EventEmitter()
david.on("geografia", () => { console.log("escuchando sobre geografia") })

david.emit("geografia")
geo.subscribirse("geografia")

