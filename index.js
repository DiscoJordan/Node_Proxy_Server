require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const { link, token, port } = require("./config/config");
let resp ;

axios.get(link + token).then((response) => {
  resp= response.data;
});

app.get("/meteors", (req, res) => {
  res.send(resp);
});

app.listen(port || 4000, () => {
  console.log("Server is running on port: " + port || 4000);
});
