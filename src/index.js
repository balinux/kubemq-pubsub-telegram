const subscribeToEvent = require("./subscriber.js");

/**
 * Fungsi utama untuk menjalankan subscriber
 */
const main = async () => {
  console.log("Starting KubeMQ subscriber...");
  await subscribeToEvent();
};

main();
