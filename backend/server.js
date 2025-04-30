// backend/server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Donation route
app.post('/donate', (req, res) => {
  const { walletAddress, amount, cause } = req.body;

  console.log('Received Donation:', { walletAddress, amount, cause });

  // Later: Save to database
  res.json({ message: 'Donation received successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
