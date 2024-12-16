import express from "express";
import getFormattedMeteors from "../services/meteors.service.js";
import { validateDate } from "../utils/utils.js";
import queryValidation from "../middleware/queryValidation.js";
const router = express.Router();

router.get("/meteors",queryValidation, async (req, res, next) => {
  const dates = validateDate(req?.query?.date);  
  const {count,wereDangerousMeteors} = req?.query;
 
  try {
    const response = await getFormattedMeteors(
      dates,
      count,
      wereDangerousMeteors
    );
    
    res.status(200).send(
        response
    );
  } catch (error) {
    next(error);
  }
});

router.get("/meteors/layout", queryValidation, async (req, res, next) => {
    const dates = validateDate(req?.query?.date);  
    const {count,wereDangerousMeteors} = req?.query;
   
    try {
      const response = await getFormattedMeteors(
        dates,
        count,
        wereDangerousMeteors
      );
      
      res.render('meteors.njk', { formattedMeteors: response });
    } catch (error) {
      next(error);
    }
  });
 

export default router;
