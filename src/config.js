require("dotenv").config();

module.exports = {
  KUBEMQ_ADDRESS: `${process.env.KUBEMQHOST}:${process.env.KUBEMQPORT}`,
  CLIENT_ID: process.env.CLIENT_ID,
  CHANNEL: process.env.CHANNEL,
};
