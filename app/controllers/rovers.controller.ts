import express from "express";
import getRecentImage from "../services/rovers.service.js";

const router = express.Router();

router.post("/rover", async (req, res, next) => {
  try {
    const response = await getRecentImage();
    res.status(200).send(response);
  } catch (error) {
    next(error);
  }
});
router.get("/rover-form", async (req, res, next) => {
  try {
    res.render("roverForm.njk");
  } catch (error) {
    next(error);
  }
});

router.post("/rover-image", async (req, res, next) => {
  try {
    const response = await getRecentImage();

    if (response.img_src) {
      res.render("roverImage.njk", { response });
    } else {
      res.status(200).send({ photo: "there are no any photos" });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
