const express = require('express');
const filterDataResponse = require('./src/controller/controller.data');

const app = express();

app.get('/', filterDataResponse);

module.exports = app;
