import express from "express";
import getFormattedMeteors from "../services/meteors.service.js";
import queryValidation from "../middleware/queryValidation.js";
import { meteorsQuerySchema } from "../schemas/meteors.schema.js";
import { parseMeteorIntervalDates } from "../utils/utils.js";

const router = express.Router();

interface MeteorsQuery {
  dates?: string | string[];
  count?: string;
  wereDangerousMeteors?: string;
}

router.get(
  "/meteors",
  queryValidation(meteorsQuerySchema, "query"),
  async (req, res, next) => {
    const dates = parseMeteorIntervalDates(req?.query?.date);
    const { count, wereDangerousMeteors }: MeteorsQuery = req?.query || null;

    try {
      const response = await getFormattedMeteors(
        dates,
        count,
        wereDangerousMeteors,
      );

      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  },
);

router.get(
  "/meteors/layout",
  queryValidation(meteorsQuerySchema, "query"),
  async (req, res, next) => {
    const dates = parseMeteorIntervalDates(req?.query?.date);
    const { count, wereDangerousMeteors }: MeteorsQuery = req?.query || null;
    try {
      const response = await getFormattedMeteors(
        dates,
        count,
        wereDangerousMeteors,
      );

      res.render("meteors.njk", { formattedMeteors: response });
    } catch (error) {
      next(error);
    }
  },
);

export default router;
