'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to main route!');
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
