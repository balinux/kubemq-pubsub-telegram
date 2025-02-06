const { EventsSubscriptionRequest } = require("kubemq-js");
const pubsubClient = require("./pubsubClient.js");
const config = require("./config.js");
const { handleEvent, handleError } = require("./eventHandlers.js");

/**
 * Melakukan langganan ke channel event KubeMQ
 */
const subscribeToEvent = async () => {
  try {
    const subscriptionRequest = new EventsSubscriptionRequest(
      config.CHANNEL,
      "",
    );
    subscriptionRequest.onReceiveEventCallback = handleEvent;
    subscriptionRequest.onErrorCallback = handleError;

    await pubsubClient.subscribeToEvents(subscriptionRequest);
    console.log(`Subscription to channel '${config.CHANNEL}' successful`);
  } catch (error) {
    console.error("Subscription failed:", error);
  }
};

module.exports = subscribeToEvent;
