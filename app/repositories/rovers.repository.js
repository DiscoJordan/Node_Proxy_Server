import axios from "axios";
import { config } from "../config/config.js";

export default async function fetchImages() {
  const { API_KEY } = config;
  try {
    const response = await axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos",
      {
        params: {
          sol: 1000,
          camera: "fhaz",
          api_key: API_KEY,
        },
      }
    );
    return response.data.photos;
  } catch (error) {    
    throw new Error("Failed to fetch Images from NASA API");
  }
}
