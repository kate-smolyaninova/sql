const Router = require('express')
const router = new Router()
const roomRouter = require('./roomRouter')
const userRouter = require('./userRouter')

router.use('/room', roomRouter)
router.use('/user', userRouter)

module.exports = router
