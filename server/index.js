import bodyParser from 'body-parser';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const DataHelpers = require("./lib/data-helpers.js")(db);
const tweetsRoutes = require("./routes/tweets")(DataHelpers);
app.use("/tweets", tweetsRoutes);
