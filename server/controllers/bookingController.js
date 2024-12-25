const { Booking, Room, User } = require('../models/models')
const ApiError = require('../error/apiError')
const { Op } = require('sequelize')

class BookingController {
  async create(req, res) {
    const { user_email, number, settlement_date, eviction_date } = req.body

    try {
      const user = await User.findOne({ where: { user_email: user_email } })

      if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' })
      }

      const user_id = user.user_id

      const room = await Room.findOne({
        where: { room_number: number },
      })

      if (!room) {
        console.log('Полученные данные:', req.body)
        return res
          .status(400)
          .json({ message: `Комната ${number} недоступна для бронирования` })
      }

      const existingBookings = await Booking.findAll({
        where: {
          room_id: room.room_id,
          // Проверка на пересечение дат
          [Op.or]: [
            {
              settlement_date: {
                [Op.lte]: eviction_date, // Начало существующего бронирования <= конец нового бронирования
              },
              eviction_date: {
                [Op.gte]: settlement_date, // Конец существующего бронирования >= начало нового бронирования
              },
            },
          ],
        },
      })

      if (existingBookings.length > 0) {
        return res
          .status(400)
          .json({ message: 'Комната уже забронирована на эти даты' })
      }

      const booking_cost = room.room_cost

      const booking = await Booking.create({
        user_id,
        room_id: room.room_id,
        booking_cost,
        settlement_date,
        eviction_date,
        booking_status: 'Ожидает подтвержения',
      })

      await Room.update(
        { is_booked: true },
        { where: { room_id: room.room_id } }
      )

      return res.status(201).json(booking)
    } catch (error) {
      console.error(error)
      console.log('Полученные данные:', req.body)
      return res
        .status(500)
        .json({ message: `Ошибка при создании бронирования ${number}` })
    }
  }

  // async getUserBookings(req, res, next) {
  //   const user_id = req.user.id

  //   try {
  //     const bookings = await Booking.findAll({
  //       where: { user_id: user_id },
  //       include: [{ model: Room }],
  //     })

  //     return res.json(bookings)
  //   } catch (e) {
  //     console.error(e)
  //     return next(ApiError.internal('Не удалось получить бронирования'))
  //   }
  // }
}

module.exports = new BookingController()
