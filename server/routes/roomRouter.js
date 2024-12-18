const Router = require('express')
const router = new Router()
const roomControllers = require('./../controllers/roomControllers')

router.post('/create', roomControllers.create)
router.get('/', roomControllers.getAll)
router.get('/:id', roomControllers.getOne)

module.exports = router
