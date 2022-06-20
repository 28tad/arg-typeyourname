const express = require('express');
const homeRoute = require('./routes/homeRoute');
const lineRoute = require('./routes/lineRoute');
const mainConfig = require('./config/config');

const app = express();
mainConfig(app);
app.use('/', homeRoute);

app.use('/lines', lineRoute);
app.listen(4000, () => { console.log('server is up'); });
