const lineRoute = require('express').Router();

const { Line } = require('../db/models');

lineRoute.get('/:id', async (req, res) => {
  console.log(req.params)
  try {
    const { id } = req.params;
    console.log(id);
    const lines = await Line.findAll({ where: { sublevel_id: id }, raw: true, order: [['order', 'ASC']] });
    const lines2 = lines.map((el) => el = el.body);
    res.status(200).json(lines2);
  } catch (error) { console.log(error.message); }
});

module.exports = lineRoute;
