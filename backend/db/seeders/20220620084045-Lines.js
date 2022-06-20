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
      body: 'Вижу место, в которое я мечтал попасть. Вижу людей, среди которых хотел бы быть. Они спешат туда, куда мне не суждено было попасть',
      order: 1,
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'В воспоминаниях я часто рисую. Детские воспоминания самые радостные – в них я не задумываюсь, не сомневаюсь, не боюсь критики. Меня хвалят и я счастлив, получается ярко и радостно. Более поздние воспоминания болезненные. У меня не получается то, что я задумал, я смотрю на чужие работы и мне кажется, что я никогда не смогу сделать также. Я сминаю бумагу и начинаю заново. И снова заново. И снова заново. И снова заново. … Заново. ',
      order: 2,
      sublevel_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      body: 'Более поздние воспоминания болезненные. У меня не получается то, что я задумал, я смотрю на чужие работы и мне кажется, что я никогда не смогу сделать также. Я сминаю бумагу и начинаю заново. И снова заново. И снова заново. И снова заново. … Заново. ',
      order: 3,
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
