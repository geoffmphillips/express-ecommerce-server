const userHelper    = require("../lib/util/user-helper")

import express from 'express';
const productsRoutes  = express.Router();

export default function(DataHelpers) {

  productsRoutes.get("/products", function(req, res) {
    DataHelpers.getTweets((err, products) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(products);
      }
    });
  });

  productsRoutes.post("/products/:id", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return productsRoutes;

}
