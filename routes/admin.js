import express from 'express';
const adminRoutes  = express.Router();

export default function(DataHelpers) {

  adminRoutes.get("/admin", function(req, res) {
    DataHelpers.getadmin((err, admin) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(admin);
      }
    });
  });

  adminRoutes.post("/admin/:id", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    DataHelpers.saveAdmin(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return adminRoutes;

}
