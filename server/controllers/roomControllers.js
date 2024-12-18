const { Room } = require('./../models/models')
const apiError = require('./../error/apiError')
const uuid = require('uuid')
const path = require('path')
const { where } = require('sequelize')

class RoomControllers {
  async create(req, res) {
    try {
      const { floor, room_type, room_cost, room_number } = req.body
      const { photo } = req.files
      let photoName = uuid.v4() + '.jpg'
      photo.mv(path.resolve(__dirname, '..', 'static', photoName))
      const newRoom = await Room.create({
        floor,
        room_type,
        room_cost,
        photo: photoName,
        room_number,
      })
      return res.status(201).json({
        message: 'Комната успешно добавлена!',
        room: newRoom,
      })
    } catch (error) {
      console.error(error)
      return res.status(apiError.internal('Ошибка при добавлении комнаты'))
    }
  }

  async getAll(req, res) {
    let { floor, room_type, room_cost, photo, room_number, limit, page } =
      req.query
    page = page || 1
    limit = limit || limit
    let offset = page * limit - limit
    let rooms
    if (!room_type && !room_cost) {
      rooms = await Room.findAndCountAll({ limit, offset })
    }
    if (room_type && !room_cost) {
      rooms = await Room.findAndCountAll({
        where: { room_type, limit, offset },
      })
    }
    if (!room_type && room_cost) {
      rooms = await Room.findAndCountAll({
        where: { room_cost, limit, offset },
      })
    }
    if (room_type && room_cost) {
      rooms = await Room.findAndCountAll({
        where: { room_type, room_cost, limit, offset },
      })
    }
    return res.json(rooms)
  }

  async getOne(req, res) {
    const { id } = req.params
    const room = await Room.findOne({
      where: { id },
      // include: [
      //   {
      //     model: Room,
      //   },
      // ],
    })
    return res.json(room)
  }
}
module.exports = new RoomControllers()
