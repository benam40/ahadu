// Simple Express app for deployment on cPanel
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Ahadu App!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
