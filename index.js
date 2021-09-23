const express = require("express");
const dotenv = require("dotenv");

const app = express();

// Local Function and Module
const connectDatabase = require("./back-end/helper/database.config.helper");
const router = require("./back-end/router/index.router");

// DOTENV CONFİG START
dotenv.config({
  path: "back-end/env/settings.env",
});

// App settings
app.use(express.json()); //Gelen json verilerini okumak için
app.use("/api", router);

// APP LISTEN SETTİNGS
app.listen(process.env.PORT || 5000, () => {
  console.log("PORT: " + process.env.PORT + " MODE: " + process.env.NODE_ENV);
});

// DATABASE CONNECTİON
connectDatabase();
