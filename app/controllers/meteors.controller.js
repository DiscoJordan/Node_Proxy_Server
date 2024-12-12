import express from 'express';
import getFormattedMeteors  from '../services/meteors.service.js';
const router = express.Router();

router.get('/meteors',async (req,res,next)=>{
    try {
        const formattedMeteors = await getFormattedMeteors()
        res.send(formattedMeteors)
    } catch (error) {
        next(error)
    }
})


export default router;




