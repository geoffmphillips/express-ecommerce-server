import express from 'express';
const usersRoutes  = express.Router();

export default function(DataHelpers) {

  usersRoutes.get("/users", function(req, res) {
    DataHelpers.getusers((err, users) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(users);
      }
    });
  });

  usersRoutes.post("/users/:id", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    DataHelpers.saveUser(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });

  return usersRoutes;

}
