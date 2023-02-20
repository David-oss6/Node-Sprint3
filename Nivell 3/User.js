const events = require("events");
const eventEmitter = new events.EventEmitter();

class User extends events {
  constructor(x) {
    super();
    this.name = x;
  }
}

module.exports = { User };
