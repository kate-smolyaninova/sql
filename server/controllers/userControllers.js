const apiError = require('./../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Cart } = require('../models/models')
const ApiError = require('./../error/apiError')

class UserController {
  async registration(req, res, next) {
    const { user_email, user_password, role, user_phone, user_name } = req.body
    if (!user_email && !user_password) {
      return next(ApiError.badRequest('Некорректный email или password!'))
    }
    const candidate = await User.findOne({ where: { user_email } })
    if (candidate) {
      return next(
        ApiError.badRequest('Пользователь с таким email уже существует!')
      )
    }
    const hashPassword = await bcrypt.hash(user_password, 5)
    const user = await User.create({
      user_email,
      role,
      user_password: hashPassword,
      user_phone,
      user_name,
    })
    const cart = await Cart.create({ user_id: user.user_id, room_id: null })
    const token = jwt.sign(
      { id: user.user_id, user_email, role },
      process.env.SECRET_KEY,
      { expiresIn: '72h' }
    )
    return res.json({ token })
  }

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query
    if (!id) {
      return next(apiError.badRequest('ID не задан'))
    }
    res.json(id)
  }
}

module.exports = new UserController()
