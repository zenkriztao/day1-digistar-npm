const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  next(); 
});

app.get('/', (req, res) => {
  res.end('Menerima GET request\n');
});

app.post('/', (req, res) => {
  res.end('Menerima POST request\n');
});

app.put('/', (req, res) => {
  res.end('Menerima PUT request\n');
});

app.delete('/', (req, res) => {
  res.end('Menerima DELETE request\n');
});


app.use((err, req, res, next) => {
    res.status(500).send('Terjadi kesalahan pada server\n');
  });

app.listen(PORT, () => {
  console.log(`Server jalan di http://127.0.0.1:${PORT}/`);
});

