const answerRoute = require('express').Router();

const { Answer, Response } = require('../db/models');

answerRoute.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;

    const rigthAnswer = await Answer.findOne({ where: { sublevel_id: id }, raw: true });
    if (answer.trimEnd().toLowerCase() === rigthAnswer.answer) {
      res.sendStatus(200);
    } else {
      const yaWrong = await Response.findAll({ where: { sublevel_id: id }, raw: true });
      const response = await yaWrong.json();
      res.status(409).send(response);
    }
  } catch (error) { console.log(error.message); }
});

module.exports = answerRoute;
