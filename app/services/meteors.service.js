var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fetchMeteors from "../repositories/meteors.repository.js";
export default function getFormattedMeteors(_a, count_1, wereDangerousMeteors_1) {
    return __awaiter(this, arguments, void 0, function* ([startDate, endDate], count, wereDangerousMeteors) {
        const meteors = yield fetchMeteors(startDate, endDate);
        const queryResponse = {};
        const formattedMeteors = Object.keys(meteors).flatMap((date) => meteors[date].map((meteor) => {
            var _a, _b, _c;
            return ({
                id: meteor.id,
                name: meteor.name,
                diameter_meters: meteor.estimated_diameter.meters.estimated_diameter_max,
                is_potentially_hazardous_asteroid: meteor.is_potentially_hazardous_asteroid,
                close_approach_date_full: (_a = meteor.close_approach_data[0]) === null || _a === void 0 ? void 0 : _a.close_approach_date_full,
                relative_velocity_kps: (_c = (_b = meteor.close_approach_data[0]) === null || _b === void 0 ? void 0 : _b.relative_velocity) === null || _c === void 0 ? void 0 : _c.kilometers_per_second,
            });
        }));
        if (count === "true") {
            queryResponse.count = formattedMeteors.length;
        }
        if (wereDangerousMeteors === "true") {
            queryResponse.wereDangerousMeteors = formattedMeteors.some((meteor) => meteor.is_potentially_hazardous_asteroid);
        }
        return count === "true" || wereDangerousMeteors === "true"
            ? queryResponse
            : formattedMeteors;
    });
}
