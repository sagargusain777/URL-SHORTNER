import dotenv from 'dotenv';
dotenv.config({
    path : './.env'
});
import express from "express";
import urlRoute from "./routes/url.routes.js";
import connectDB from "./db/db.js";

const app = express();
const PORT =process.env.PORT

app.use("/url", urlRoute);


connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error connecting to Database : ${error.message}`);
  });
