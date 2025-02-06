const { Utils } = require("kubemq-js");
const pubsubClient = require("./pubsubClient.js");
const config = require("./config.js");

/**
 * Mengirim event message ke channel tertentu
 * @param {string} message - Pesan yang dikirim
 */
const sendEventMessage = async (message) => {
  try {
    await pubsubClient.sendEventsMessage({
      channel: config.CHANNEL,
      body: Utils.stringToBytes(message),
    });
    console.log(`✅ Event sent successfully to ${config.CHANNEL}`);
  } catch (error) {
    console.error("❌ Error sending event:", error);
  }
};

/**
 * Mengirim event store message ke channel tertentu
 * @param {string} message - Pesan yang dikirim
 */
const sendEventStoreMessage = async (message) => {
  console.log("message: ", message);
  try {
    const result = await pubsubClient.sendEventStoreMessage({
      channel: config.CHANNEL_EVENTS_STORE,
      body: Utils.stringToBytes(message),
    });

    console.log(`✅ Event Store sent to ${config.CHANNEL_EVENTS_STORE}`);
    console.log(`🔹 ID: ${result.id}`);
    console.log(`🔹 Sent: ${result.sent}`);

    if (result.error) {
      console.error(`❌ Error: ${result.error}`);
    }
  } catch (error) {
    console.error("❌ Error sending event store message:", error);
  }
};

module.exports = { sendEventMessage, sendEventStoreMessage };
