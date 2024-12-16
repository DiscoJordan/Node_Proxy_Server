import express from "express";
import getRecentImage from "../services/rovers.service.js";
const router = express.Router()

router.post("/rover", async (req,res,next)=>{

try {
    const response = await getRecentImage()
    res.status(200).send(response)
} catch (error) {
    next(error)
}


})

export default router;