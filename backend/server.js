const express = require('express');
const homeRoute = require('./routes/homeRoute');
const mainConfig = require('./config/config');

const app = express();
mainConfig(app);
app.use('/', homeRoute);
app.listen(4000, () => { console.log('server is up'); });
