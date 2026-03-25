const express = require('express');
const cors = require('cors');

const app = express();

const apiRoutes = require('./routes/Routes');

app.use(cors());
app.use(express.json());

app.use('/livros', apiRoutes);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ erro: err.message });
});

module.exports = app;