require("dotenv").config();
const { Utils } = require("kubemq-js");
const Bot = require("./service/telegram-service");

// instance bot telegram
const bot = new Bot(process.env.TOKEN_BOT);

/**
 * Menangani event yang diterima dari KubeMQ
 * @param {object} event - EventMessageReceived
 */
const handleEvent = (event) => {
  console.log("Subscriber received event:", {
    id: event.id,
    fromClientId: event.fromClientId,
    timestamp: event.timestamp,
    channel: event.channel,
    metadata: event.metadata,
    body: event.body.toString(),
    tags: event.tags,
  });

  const stringMessage = Utils.bytesToString(event.body);

  bot.sendMessage(stringMessage);

  console.log("body: ", Utils.bytesToString(event.body));
};

/**
 * Menangani error yang terjadi saat berlangganan event
 * @param {string} error - Pesan error
 */
const handleError = (error) => {
  console.error("Subscriber error:", error);
};

module.exports = { handleEvent, handleError };
