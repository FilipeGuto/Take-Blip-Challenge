const express = require('express');

const app = express();
app.use(function (_req, res,) {
  res.status(200).json('success');
});

module.exports = app;
