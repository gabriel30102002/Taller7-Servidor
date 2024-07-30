'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let etiquetas = ['nombre 1', 'nombre 2', 'nombre 3']
      for(let etiqueta of etiquetas) {
        await queryInterface.bulkInsert('Usuario', [{
          texto: etiqueta,
          createdAt: new Date(),
          updatedAt: new Date()
      }], {});
      }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('etiquetas', null, {});
  }
};
