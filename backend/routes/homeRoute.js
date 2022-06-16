const homeRoute = require('express').Router();

homeRoute.get('/', (req, res) => {
  res.status(200).json({ text: 'hi' });
});

module.exports = homeRoute;
