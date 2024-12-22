import "dotenv/config";

export const config = {
  BASE_API_URL: "https://api.nasa.gov",
  API_PATH: process.env.API_PATH,
  API_KEY: process.env.API_KEY,
  PORT: process.env.PORT || 4000,
};
