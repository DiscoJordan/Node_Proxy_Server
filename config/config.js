require("dotenv").config();

const config = {
  link: process.env.API_LINK,
  token: process.env.API_TOKEN,
  port: process.env.PORT || 4000,
};

module.exports = config;