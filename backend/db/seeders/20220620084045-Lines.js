module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lines', [{
      body: '1-1 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 1,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: '1-2 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 2,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: '1-3 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 3,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: '1-4 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 4,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: '2-1 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 1,
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: '2-2 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 2,
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: '3-1 text text long text might be very long text text text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long texttext text long text might be very long text',
      order: 1,
      sublevel_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lines', null, {});
  },
};
