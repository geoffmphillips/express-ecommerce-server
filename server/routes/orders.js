import express from 'express';
const ordersRoutes  = express.Router();

export default function(DataHelpers) {

  ordersRoutes.get("/orders", function(req, res) {
    DataHelpers.getorders((err, orders) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(orders);
      }
    });
  });

  ordersRoutes.post("/orders/:id", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    DataHelpers.saveOrder(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return ordersRoutes;

}
