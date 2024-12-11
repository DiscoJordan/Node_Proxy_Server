require('dotenv').config();
const axios = require('axios');

axios
  .get(process.env.API_LINK + process.env.API_TOKEN)
  .then((response) => console.log(response.data));
