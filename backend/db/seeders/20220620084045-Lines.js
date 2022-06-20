module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Lines', [{
      body: ' Я не совсем понимаю кто я.',
      order: 1,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Даже не так, я не совсем понимаю, что я.',
      order: 2,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Я помню имя – Марк. Пусть будет Марк, называй меня так.',
      order: 3,
      sublevel_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Иногда ко мне прорываются вспышки воспоминаний, но я даже не уверен, что это происходило со мной.',
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
