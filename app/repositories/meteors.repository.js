import axios from "axios";
import { config } from "../config/config.js";

export default async function fetchMeteors(startDate, endDate) {
  const { API_KEY, BASE_API_URL, API_PATH } = config;

  const urlNasa = `${BASE_API_URL + API_PATH}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;

  const response = await axios.get(urlNasa);

  return response.data.near_earth_objects;
}
