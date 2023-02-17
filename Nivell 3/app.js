// https://www.w3schools.com/nodejs/nodejs_events.asp
const { User } = require("./User.js")
const { Tema } = require("./Tema.js")

const paco = new User("Paco")
const david = new User("David")

const geoSubscribers = [david, paco]
const geo = new Tema("geografia", geoSubscribers)



geo.subscribirse("geografia")

