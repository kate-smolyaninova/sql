const Router = require('express')
const router = new Router()
const roomControllers = require('./../controllers/roomControllers')
const checkRole = require('./../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), roomControllers.create)
router.get('/', roomControllers.getAll)
router.get('/:id', roomControllers.getOne)

module.exports = router
