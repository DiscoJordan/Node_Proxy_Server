import axios from "axios";
import getUrl from "../utils/getUrl.js";

export default async function fetchMeteors() {
  try {
    const urlNasa = getUrl();

    const response = await axios.get(urlNasa);
    return response.data.near_earth_objects;
  } catch (error) {
    throw new Error("Failed to fetch meteors from NASA API");
  }
}
