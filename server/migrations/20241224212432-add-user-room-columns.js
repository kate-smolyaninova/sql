module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Bookings', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    })
    await queryInterface.addColumn('Bookings', 'room_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',
        key: 'room_id',
      },
    })
    await queryInterface.addColumn('Reviews', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Bookings', 'user_id')
    await queryInterface.removeColumn('Bookings', 'room_id')
    await queryInterface.removeColumn('Reviews', 'user_id')
  },
}
