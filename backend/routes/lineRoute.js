const lineRoute = require('express').Router();

const { Line, UserSublevel } = require('../db/models');

lineRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user_id = req.session.id;
  if (id === 1) {
    const lines = await Line.findAll({ where: { sublevel_id: id }, raw: true, order: [['order', 'ASC']] });
    const lines2 = lines.map((el) => el = el.body);
    res.status(200).json(lines2, req.session.id);
  } else {
    const userSublevel = await UserSublevel.findAll({ where: { user_id }, order: [['id', 'DESC']], limit: 1 });
    if (id % 2 === 0) {
      if (id - userSublevel[0].sublevel_id === 2) {
        const lines = await Line.findAll({ where: { sublevel_id: id }, raw: true, order: [['order', 'ASC']] });
        const lines2 = lines.map((el) => el = el.body);
        res.status(200).json(lines2, req.session.id);
      } else { res.status(409).json({ text: 'че самый умный штоль' }); }
    }
    if (id % 2 === 1) {
      if (id - userSublevel[0].sublevel_id === 1) {
        const lines = await Line.findAll({ where: { sublevel_id: id }, raw: true, order: [['order', 'ASC']] });
        const lines2 = lines.map((el) => el = el.body);
        res.status(200).json(lines2);
      } else { res.status(409).json({ text: 'че самый умный штоль' }); }
    }
  }
});

module.exports = lineRoute;
