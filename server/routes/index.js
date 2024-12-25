const Router = require('express')
const router = new Router()
const roomRouter = require('./roomRouter')
const userRouter = require('./userRouter')
const bookingRouter = require('./bookingRouter')

router.use('/room', roomRouter)
router.use('/user', userRouter)
router.use('/booking', bookingRouter)

module.exports = router
