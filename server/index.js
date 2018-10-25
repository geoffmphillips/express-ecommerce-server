import bodyParser from 'body-parser';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const DataHelpers = require("./lib/data-helpers.js")(db);
const productsRoutes = require("./routes/products")(DataHelpers);
app.use("/products", productsRoutes);

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
