const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('frontend'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/home.html'));
});

app.post('/api/create-poll', (req, res) => {
  res.json({ message: 'Poll created successfully' });
});

// Handle all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/home.html'));
});

if (require.main === module) {
  app.listen(3000);
} else {
  module.exports = app;
}
