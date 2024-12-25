"use strict";

var Router = require('express');

var router = new Router();

var roomControllers = require('./../controllers/roomControllers');

var checkRole = require('./../middleware/checkRoleMiddleware');

router.post('/create', checkRole('ADMIN'), roomControllers.create);
router.get('/', roomControllers.getAll);
router.get('/:id', roomControllers.getOne);
module.exports = router;