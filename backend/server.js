// server.js
// Import required modules
import express, { json } from 'express';
import cors from 'cors'; //enables requests from frontend to backend
import path from 'path'; //helps with file and directory paths

const app = express(); // Create Express app instance
const PORT = process.env.PORT || 5000;  // use Render's port (or 5000 locally)

app.use(cors()); // Allow frontend to talk to backend
app.use(express.json()); // Parse JSON bodies from requests

// Example route to test
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from backend 👋' });
});

const __dirname1 = path.resolve();   // get absolute project path
app.use(express.static(path.join(__dirname1, "../frontend/dist")));

// for *any other* route (like /about, /resources), send the React index.html file
app.get(/.*/, (req, res) => { // /.*/ matches all routes
  res.sendFile(path.join(__dirname1, "../frontend/dist/index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
