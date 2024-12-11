require('dotenv').config();
const express = require('express')
const axios = require('axios');
const app = express()
const { link, token, port } = require('./config/config');

axios
  .get(link + token)
  .then((response) => {
    console.log("Response:", response.data.near_earth_objects['2024-12-11'][0].name);
})

  app.listen(port||4000,()=>{
    console.log('Server is running on port: ' + port||4000);
   })