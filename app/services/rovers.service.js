var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchImages from "../repositories/rovers.repository.js";
export default function getRecentImage() {
    return __awaiter(this, void 0, void 0, function* () {
        const images = yield fetchImages();
        const recentImage = images.sort((a, b) => new Date(b.earth_date).getTime() - new Date(a.earth_date).getTime());
        return recentImage[0];
    });
}
