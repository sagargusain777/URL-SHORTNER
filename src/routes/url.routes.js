import express from 'express';
import {handleGenerateNewShortUrl} from '../controllers/url.controllers.js'
import  {handleAnalyticsData}  from '../controllers/url.controllers.js';
const router = express.Router();


router.post('/',handleGenerateNewShortUrl);
router.get('/analytics/:shortId',handleAnalyticsData)

export default router;