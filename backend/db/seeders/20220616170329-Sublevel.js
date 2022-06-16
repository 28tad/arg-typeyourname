module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sublevels', [{
      title: 'sublevel-name 1',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 2',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 3',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 4',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 5',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 6',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 7',
      level_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 8',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 9',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 10',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 11',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 12',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 13',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 14',
      level_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 15',
      level_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 16',
      level_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 17',
      level_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 18',
      level_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 19',
      level_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'sublevel-name 20',
      level_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sublevels', null, {});
  },
};
