'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Heros',
      [
        {
          user_id: 1,
          name: 'Batman',
          description: 'The Dark Knight',
          film: 'Batman Begins',
          img: 'https://upload.wikimedia.org/wikipedia/ru/a/a2/Batman_Jim_Lee.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          name: 'Superman',
          description: 'Man of Steel',
          film: 'Man of Steel',
          img: 'https://upload.wikimedia.org/wikipedia/ru/archive/d/d6/20220808193319%21Superman_Man_of_Steel.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // добавьте больше героев по необходимости
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Heroes', null, {});
  },
};
