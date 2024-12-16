import express from "express";
import getFormattedMeteors from "../services/meteors.service.js";
import { validateDate } from "../utils/utils.js";
const router = express.Router();

router.get("/meteors", async (req, res, next) => {
  const dates = validateDate(req.query?.date);  
  const count = req.query?.count;
  const wereDangerousMeteors = req.query?.wereDangerousMeteors;

  try {
    const formattedMeteors = await getFormattedMeteors(
      dates,
      count,
      wereDangerousMeteors
    );
    
    res.send(
      formattedMeteors
    );
  } catch (error) {
    next(error);
  }
});

export default router;
