const { sendEventMessage } = require("./publisher.js");

/**
 * Fungsi utama untuk menjalankan subscriber
 */
const main = async () => {
  console.log("Starting KubeMQ subscriber...");

  const jsonToString = JSON.stringify({
    id_telegram: "207853653",
    message_text: "example",
  });

  await sendEventMessage(jsonToString);
};

main();
