import {nanoid} from 'nanoid';

 import {URL} from '../models/url.models.js';
export const handleGenerateNewShortUrl= async(req,res)=>{
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

export  const handleAnalyticsData = async(req,res)=>{

    const shortId = req.params.shortId;
    console.log(shortId)

    const analyticsData = await URL.findOne({shortId});

    res.status(200).send(` total Clicks :${analyticsData.visitHistory.length}  Analytics : ${analyticsData.visitHistory} `)

}