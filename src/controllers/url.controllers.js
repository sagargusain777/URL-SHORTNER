import { nanoid } from "nanoid";

import { URL } from "../models/url.models.js";

// New URL creation in the database and giving the short id to the original URL
export const handleGenerateNewShortUrl = async (req, res) => {
  
  try {
    const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }
    const shortID = nanoid(9);
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
    
  } catch (error) {
    console.log(`Error generating short URL : ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
    
  }
  
};
//Function for analytics data of the short URL
export const handleAnalyticsData = async (req, res) => {
  const shortId = req.params.shortId;
  console.log(shortId);

  try {
    const analyticsData = await URL.findOne({ shortId });

    res
      .status(200)
      .send(
        ` total Clicks :${analyticsData.visitHistory.length} Analytics : ${analyticsData.visitHistory} `
      );
  } catch (error) {
    console.log(`Error fetching analytics data : ${error.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
