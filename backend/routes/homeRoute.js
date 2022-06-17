const homeRoute = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

homeRoute.get('/', (req, res) => {
  res.status(200).json({ text: 'hi' });
});

homeRoute.post('/', async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    const userName = await User.findOne({
      where: { username },
    });

    if (userName) {
      if (await bcrypt.compare(password, userName.password)) {
        req.session.user = userName;
        res.status(200).json('login');
      } else {
        res.status(401).json({ text: `Я уже знаком с ${username}, и ты не он` });
      }
    } else {
      const newUser = await User.create({
        username, password: await bcrypt.hash(password, 5),
      });
      req.session.user = newUser;
      res.status(200).json('auth');
    }
  } catch (error) { console.log(error.message); }
});

module.exports = homeRoute;
