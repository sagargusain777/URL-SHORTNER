import express from 'express';
import handleGenerateNewShortUrl from '../controllers/url.controllers.js'
const router = express.Router();


router.post('/api',handleGenerateNewShortUrl)

export default router;