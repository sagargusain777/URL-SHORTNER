import {nanoid} from 'nanoid';

 import {URL} from '../models/url.models.js';
async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url){
        return  res.status(400).json({error: 'URL is required'})
    }
    const shortID = nanoid(9);
    await URL.create({
        shortId : shortID,
        redirectUrl : body.url,
        visitHistory : []
    })

    return res.json({id : shortID})

}
export default handleGenerateNewShortUrl;