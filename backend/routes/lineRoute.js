const lineRoute = require('express').Router();

const { Line } = require('../db/models');

lineRoute.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const lines = await Line.findAll({ where: { sublevel_id: id }, raw: true, order: [['order', 'ASC']] });
    const response = await lines.json();
    res.status(200).send(response);
  } catch (error) { console.log(error.message); }
});

module.exports = lineRoute;
