import axios from "axios";
import { config } from "../config/config.js";
import { CloseEarthObjects } from "../types/meteors.types.js";

export default async function fetchMeteors(
  startDate: string,
  endDate: string,
): Promise<CloseEarthObjects> {
  const { API_KEY, BASE_API_URL, API_PATH } = config;

  const urlNasa = `${BASE_API_URL + API_PATH}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;

  const response = await axios.get(urlNasa);

  return response.data.near_earth_objects;
}
