import bodyParser from 'body-parser';
import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const productsDataHelpers = require("./lib/products-data-helpers.js")(db);
const productsRoutes = require("./routes/products")(DataHelpers);
app.use("/products", productsRoutes);

const usersDataHelpers = require("./lib/users-data-helpers.js")(db);
const usersRoutes = require("./routes/users")(DataHelpers);
app.use("/users", usersRoutes);

const ordersDataHelpers = require("./lib/orders-data-helpers.js")(db);
const ordersRoutes = require("./routes/orders")(DataHelpers);
app.use("/orders", ordersRoutes);

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
