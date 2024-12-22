var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import getFormattedMeteors from "../services/meteors.service.js";
import { validateDate } from "../utils/utils.js";
import queryValidation from "../middleware/queryValidation.js";
import { meteorsQuerySchema } from "../schemas/meteors.schema.js";
const router = express.Router();
router.get("/meteors", queryValidation(meteorsQuerySchema, "query"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const dates = validateDate((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.date);
    const { count, wereDangerousMeteors } = req.query;
    try {
        const response = yield getFormattedMeteors(dates, count, wereDangerousMeteors);
        res.status(200).send(response);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/meteors/layout", queryValidation(meteorsQuerySchema, "query"), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const dates = validateDate((_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.date);
    const { count, wereDangerousMeteors } = req.query;
    try {
        const response = yield getFormattedMeteors(dates, count, wereDangerousMeteors);
        res.render("meteors.njk", { formattedMeteors: response });
    }
    catch (error) {
        next(error);
    }
}));
export default router;
