const apiError = require('./../error/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Cart } = require('../models/models')
const ApiError = require('./../error/apiError')

const generateJWT = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: '336h',
  })
}

class UserController {
  async registration(req, res, next) {
    const { user_email, user_password, role, user_phone, user_name } = req.body
    if (!user_email && !user_password) {
      return next(ApiError.badRequest('Некорректный email или password!'))
    }
    const candidate = await User.findOne({ where: { user_email } })
    if (candidate) {
      return next(
        apiError.badRequest('Пользователь с таким email уже существует!')
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
    const token = generateJWT(user.user_id, user.user_email, user.role)
    return res.json({ token })
  }

  async login(req, res, next) {
    const { user_email, user_password } = req.body
    const user = await User.findOne({ where: { user_email } })
    if (!user) {
      return next(ApiError.badRequest('Пользователь не найден'))
    }

    let comparePassword = bcrypt.compareSync(user_password, user.user_password)
    if (!comparePassword) {
      return next(ApiError.badRequest('Неверно введеный пароль'))
    }

    const token = generateJWT(user.user_id, user.user_email, user.role)
    return res.json({ token })
  }

  async check(req, res, next) {
    const token = generateJWT(
      req.user.user_id,
      req.user.user_email,
      req.user.role
    )

    return res.json({ token })
  }

  async getAllUsers(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch (error) {
      console.error(error)
    }
  }

  async deleteUser(req, res) {
    const { id } = req.params

    try {
      const deletedUser = await User.destroy({
        where: { user_id: id },
      })

      if (!deletedUser) {
        return res.status(404).json({ message: 'Пользователь не найден' })
      }
      return res.status(200).json({ message: 'Пользователь успешно удален' })
    } catch (err) {
      console.error(error)
      return res
        .status(500)
        .json({ message: 'Ошибка при удалении пользователя' })
    }
  }
}

module.exports = new UserController()
