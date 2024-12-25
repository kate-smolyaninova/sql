"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../models/models'),
    Booking = _require.Booking,
    Room = _require.Room,
    User = _require.User;

var ApiError = require('../error/apiError');

var _require2 = require('sequelize'),
    Op = _require2.Op;

var BookingController =
/*#__PURE__*/
function () {
  function BookingController() {
    _classCallCheck(this, BookingController);
  }

  _createClass(BookingController, [{
    key: "create",
    value: function create(req, res) {
      var _req$body, user_email, number, settlement_date, eviction_date, user, user_id, room, existingBookings, booking_cost, booking;

      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _req$body = req.body, user_email = _req$body.user_email, number = _req$body.number, settlement_date = _req$body.settlement_date, eviction_date = _req$body.eviction_date;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(User.findOne({
                where: {
                  user_email: user_email
                }
              }));

            case 4:
              user = _context.sent;

              if (user) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", res.status(404).json({
                message: 'Пользователь не найден'
              }));

            case 7:
              user_id = user.user_id;
              _context.next = 10;
              return regeneratorRuntime.awrap(Room.findOne({
                where: {
                  room_number: number
                }
              }));

            case 10:
              room = _context.sent;

              if (room) {
                _context.next = 14;
                break;
              }

              console.log('Полученные данные:', req.body);
              return _context.abrupt("return", res.status(400).json({
                message: "\u041A\u043E\u043C\u043D\u0430\u0442\u0430 ".concat(number, " \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430 \u0434\u043B\u044F \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F")
              }));

            case 14:
              _context.next = 16;
              return regeneratorRuntime.awrap(Booking.findAll({
                where: _defineProperty({
                  room_id: room.room_id
                }, Op.or, [{
                  settlement_date: _defineProperty({}, Op.lte, eviction_date),
                  eviction_date: _defineProperty({}, Op.gte, settlement_date)
                }])
              }));

            case 16:
              existingBookings = _context.sent;

              if (!(existingBookings.length > 0)) {
                _context.next = 19;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: 'Комната уже забронирована на эти даты'
              }));

            case 19:
              booking_cost = room.room_cost;
              _context.next = 22;
              return regeneratorRuntime.awrap(Booking.create({
                user_id: user_id,
                room_id: room.room_id,
                booking_cost: booking_cost,
                settlement_date: settlement_date,
                eviction_date: eviction_date,
                booking_status: 'Ожидает подтвержения'
              }));

            case 22:
              booking = _context.sent;
              _context.next = 25;
              return regeneratorRuntime.awrap(Room.update({
                is_booked: true
              }, {
                where: {
                  room_id: room.room_id
                }
              }));

            case 25:
              return _context.abrupt("return", res.status(201).json(booking));

            case 28:
              _context.prev = 28;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
              console.log('Полученные данные:', req.body);
              return _context.abrupt("return", res.status(500).json({
                message: "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F ".concat(number)
              }));

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 28]]);
    } // async getUserBookings(req, res, next) {
    //   const user_id = req.user.id
    //   try {
    //     const bookings = await Booking.findAll({
    //       where: { user_id: user_id },
    //       include: [{ model: Room }],
    //     })
    //     return res.json(bookings)
    //   } catch (e) {
    //     console.error(e)
    //     return next(ApiError.internal('Не удалось получить бронирования'))
    //   }
    // }

  }]);

  return BookingController;
}();

module.exports = new BookingController();