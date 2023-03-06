'use strict';

const express = require('express');
const app = express();
const Port = process.env.Port || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen(Port, () => {
  console.log('Server is running on port', Port);
});
