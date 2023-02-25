const amqp = require("amqplib/callback_api");

const sender = (msg, name) => {
  amqp.connect("amqp://localhost", function (error0, connection) {
    if (error0) {
      throw error0;
    }
    connection.createChannel(function (error1, channel) {
      if (error1) {
        throw error1;
      }
      const queue = "hello";
      channel.assertQueue(queue, {
        durable: false,
      });

      channel.sendToQueue(queue, Buffer.from(msg));
      console.log(` [x] Sent by ${name}: %s`, msg);
    });
    setTimeout(function () {
      connection.close();
      process.exit(0);
    }, 500);
  });
};
class Publisher {
  constructor(name) {
    this.name = name;
  }

  sendMessage(msg) {
    sender(msg, this.name);
  }
}
const paco = new Publisher("Paco");
paco.sendMessage("La luna esta lejos");
