import {config} from "../config/config.js";

const { START_DATE, END_DATE, API_KEY, BASE_API_URL,API_PATH } = config;

export default function getUrl() {
    return `${BASE_API_URL+API_PATH}?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;
}

