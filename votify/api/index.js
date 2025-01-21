const express = require('express');
const app = express();

app.use(express.json());

app.post('/create-poll', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Poll created successfully' });
});

module.exports = app;
