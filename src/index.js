import dotenv from 'dotenv';
dotenv.config({
    path : './.env'
});
import express from "express";
import urlRoute from "./routes/url.routes.js";
import connectDB from "./db/db.js";
import {URL} from './models/url.models.js'
const app = express();
const PORT =process.env.PORT
app.use(express.json({limit :"16kb"}))
app.use("/url", urlRoute);

app.get('/:shortId',async(req,res)=>{
       const shortId = req.params.shortId;

     const entry =  await URL.findOneAndUpdate({
        shortId

       },{$push : {
        vistHistory : {
          timestamps : Date.now()
        }
       }})

       res.redirect(entry.redirectUrl);

})


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to Database : ${error.message}`);
  });
