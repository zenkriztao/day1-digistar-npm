const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello, world!');
});

app.post('/data', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.status(200).json({ message: `Hello, ${name}!` });
  } else {
    res.status(400).json({ error: 'Name is required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; 