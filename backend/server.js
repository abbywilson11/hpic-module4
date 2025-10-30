// server.js
// Import required modules
import express, { json } from 'express';
import cors from 'cors';

const app = express(); // Create Express app instance
const PORT = 5000; // You can change this if needed

app.use(cors()); // Allow frontend to talk to backend
app.use(json()); // Parse JSON bodies from requests

// Example route to test
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend 👋' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
