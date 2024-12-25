const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_name: { type: DataTypes.STRING, allowNull: false },
  user_phone: { type: DataTypes.STRING, unique: true, allowNull: false },
  user_email: { type: DataTypes.STRING, unique: true, allowNull: false },
  user_password: { type: DataTypes.STRING, allowNull: false },
  role: {
    type: DataTypes.ENUM('USER', 'CLEANER', 'REGISTRAR', 'ADMIN'),
    defaultValue: 'USER',
  },
})

const Room = sequelize.define('room', {
  room_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  floor: { type: DataTypes.INTEGER, allowNull: false },
  photo: { type: DataTypes.STRING, allowNull: true },
  room_type: {
    type: DataTypes.ENUM('Эконом', 'Стандартный', 'Семейный', 'Делюкс', 'Люкс'),
    allowNull: false,
  },
  room_cost: { type: DataTypes.INTEGER, allowNull: false },
  room_number: { type: DataTypes.INTEGER, allowNull: false },
  is_booked: { type: DataTypes.BOOLEAN, defaultValue: false },
})

const Review = sequelize.define('review', {
  review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  review_title: { type: DataTypes.STRING, allowNull: false },
  review_description: { type: DataTypes.STRING, allowNull: true },
  review_evaluation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
})

const CleaningStatus = sequelize.define('cleaning_status', {
  cleaning_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  cleaning_data: { type: DataTypes.DATE, allowNull: true },
  cleaning_done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  },
})

const Cleaner = sequelize.define('cleaner', {
  cleaner_post: { type: DataTypes.STRING, allowNull: false },
})

const Registrar = sequelize.define('registrar', {
  registrar_post: { type: DataTypes.STRING, allowNull: false },
})

const Booking = sequelize.define('booking', {
  booking_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  room_id: { type: DataTypes.INTEGER, allowNull: false },
  booking_status: {
    type: DataTypes.ENUM(
      'Ожидает подтвержения',
      'Подтвержён',
      'Отменён',
      'Заселён',
      'Выселен'
    ),
    defaultValue: 'Ожидает подтвержения',
  },
  booking_cost: { type: DataTypes.INTEGER },
  settlement_date: { type: DataTypes.DATE, allowNull: false },
  eviction_date: { type: DataTypes.DATE, allowNull: false },
})

const Services = sequelize.define('services', {
  services_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  services_name: { type: DataTypes.STRING, allowNull: false },
  services_cost: { type: DataTypes.INTEGER, allowNull: false },
})

const Cart = sequelize.define('cart', {
  cart_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  room_id: { type: DataTypes.INTEGER, allowNull: true },
  user_id: { type: DataTypes.INTEGER, allowNull: true },
})

User.hasOne(Cart)
Cart.belongsTo(User)

Room.hasMany(Booking)
Booking.belongsTo(Room)

User.hasMany(Booking)
Booking.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)

Booking.hasMany(Services)
Services.belongsTo(Booking)

Registrar.hasMany(Booking)
Booking.belongsTo(Registrar)

Room.hasOne(CleaningStatus)
CleaningStatus.belongsTo(Room)

Cleaner.hasMany(CleaningStatus)
CleaningStatus.belongsTo(Cleaner)

User.hasMany(Cleaner)
Cleaner.belongsTo(User)

User.hasMany(Registrar)
Registrar.belongsTo(User)

module.exports = {
  User,
  Room,
  Review,
  CleaningStatus,
  Cleaner,
  Registrar,
  Booking,
  Services,
  Cart,
}
