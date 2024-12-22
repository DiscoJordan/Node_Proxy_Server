import express from "express";
import getFormattedMeteors from "../services/meteors.service.js";
import { validateDate } from "../utils/utils.js";
import queryValidation from "../middleware/queryValidation.js";
import { meteorsQuerySchema } from "../schemas/meteors.schema.js";
const router = express.Router();

interface MeteorsQuery {
  count?: string;
  wereDangerousMeteors?: string;
}

router.get(
  "/meteors",
  queryValidation(meteorsQuerySchema, "query"),
  async (req, res, next) => {
    const dates = validateDate(req?.query?.date as string | [string, string]);
    const { count, wereDangerousMeteors }: MeteorsQuery = req.query;

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
    const dates = validateDate(req?.query?.date as string | [string, string]);
    const { count, wereDangerousMeteors }: MeteorsQuery = req.query;

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
