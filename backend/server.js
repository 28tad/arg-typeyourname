const express = require('express');
const homeRoute = require('./routes/homeRoute');

const app = express();
app.use('/', homeRoute);
app.listen(4000, () => { console.log('server is up'); });
