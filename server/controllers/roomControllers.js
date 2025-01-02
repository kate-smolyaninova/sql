const { Room } = require('./../models/models')
const apiError = require('./../error/apiError')
const uuid = require('uuid')
const path = require('path')
const { where } = require('sequelize')

class RoomControllers {
  async create(req, res) {
    console.log(req.files)
    try {
      const { floor, room_type, room_cost, room_number } = req.body
      const { photo } = req.files

      if (!photo) {
        return res.status(400).json({ message: 'Фото не загружено' })
      }

      let photoName = uuid.v4() + '.jpg'

      await photo.mv(path.resolve(__dirname, '..', 'static', photoName))

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
      return res.status(500).json({ message: 'Ошибка при добавлении комнаты' })
    }
  }

  async getAll(req, res) {
    let { floor, room_type, room_cost, photo, room_number, limit, page } =
      req.query
    page = parseInt(page) || 1
    limit = parseInt(limit) || 10
    const offset = (page - 1) * limit
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
      where: { room_id: id },
      // include: [
      //   {
      //     model: Room,
      //   },
      // ],
    })
    return res.json(room)
  }

  async deleteRoom(req, res) {
    const { id } = req.params
    try {
      const deletedRoom = await Room.destroy({
        where: { room_id: id },
      })
      if (!deletedRoom) {
        return res.status(404).json({ message: 'Комната не найдена' })
      }
      return res.status(200).json({ message: 'Комната успешно удалена' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Ошибка при удалении комнаты' })
    }
  }
}
module.exports = new RoomControllers()
