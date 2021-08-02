const express = require('express');
const app = express();
const v1Router = require('./api/v1.js')

app.use(express.json());

app.get('/api/', (req, res) => {
  res.send('Hello! at root of api')
});

app.use('/api/v1', v1Router);

module.exports = app;