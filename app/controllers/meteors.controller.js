import express from "express";
import getFormattedMeteors from "../services/meteors.service.js";
const router = express.Router();

router.get("/meteors", async (req, res, next) => {
  const startDate = "2024-11-17";
  const endDate = "2024-11-18";
  try {
    const formattedMeteors = await getFormattedMeteors(startDate,endDate);
    res.send(formattedMeteors);
  } catch (error) {
    next(error);
  }
});

export default router;
