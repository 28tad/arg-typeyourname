const express = require('express');
const homeRoute = require('./routes/homeRoute');
const lineRoute = require('./routes/lineRoute');
const answerRoute = require('./routes/answerRoute');
const mainConfig = require('./config/config');

const app = express();
mainConfig(app);
app.use('/', homeRoute);
app.use('/lines', lineRoute);
app.use('/answer', answerRoute);

app.listen(4000, () => { console.log('server is up'); });
