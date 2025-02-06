const { PubsubClient } = require("kubemq-js");
const config = require("./config.js");

const pubsubClient = new PubsubClient({
  address: config.KUBEMQ_ADDRESS,
  clientId: config.CLIENT_ID,
});

module.exports = pubsubClient;
