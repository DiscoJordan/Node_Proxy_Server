var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { config } from "../config/config.js";
export default function fetchMeteors(startDate, endDate) {
    return __awaiter(this, void 0, void 0, function* () {
        const { API_KEY, BASE_API_URL, API_PATH } = config;
        const urlNasa = `${BASE_API_URL + API_PATH}?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
        const response = yield axios.get(urlNasa);
        return response.data.near_earth_objects;
    });
}
