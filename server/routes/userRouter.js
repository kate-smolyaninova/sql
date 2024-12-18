const Router = require('express')
const router = new Router()
const userController = require('../controllers/userControllers')
const auth = require('./../../server/middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)

router.get('/auth', auth, userController.check)

module.exports = router
