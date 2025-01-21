// Basic Node.js server for Votify

const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());

// Handle Vercel serverless environment
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve home.html as the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home.html'));
});

// API Routes
app.post('/api/create-poll', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Poll created successfully' });
});

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/home.html'));
});

// For Vercel serverless deployment
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}