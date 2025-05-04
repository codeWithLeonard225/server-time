import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/server-time', (req, res) => {
  const now = new Date();
  // Ensure the time zone is set to Sierra Leone (Africa/Freetown)
  const serverTime = now.toLocaleTimeString('en-US', { timeZone: 'Africa/Freetown' });
  res.json({ serverTime });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});