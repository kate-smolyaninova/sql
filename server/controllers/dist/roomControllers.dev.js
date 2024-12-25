"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./../models/models'),
    Room = _require.Room;

var apiError = require('./../error/apiError');

var uuid = require('uuid');

var path = require('path');

var _require2 = require('sequelize'),
    where = _require2.where;

var RoomControllers =
/*#__PURE__*/
function () {
  function RoomControllers() {
    _classCallCheck(this, RoomControllers);
  }

  _createClass(RoomControllers, [{
    key: "create",
    value: function create(req, res) {
      var _req$body, floor, room_type, room_cost, room_number, photo, photoName, newRoom;

      return regeneratorRuntime.async(function create$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(req.files);
              _context.prev = 1;
              _req$body = req.body, floor = _req$body.floor, room_type = _req$body.room_type, room_cost = _req$body.room_cost, room_number = _req$body.room_number;
              photo = req.files.photo;

              if (photo) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", res.status(400).json({
                message: 'Фото не загружено'
              }));

            case 6:
              photoName = uuid.v4() + '.jpg';
              _context.next = 9;
              return regeneratorRuntime.awrap(photo.mv(path.resolve(__dirname, '..', 'static', photoName)));

            case 9:
              _context.next = 11;
              return regeneratorRuntime.awrap(Room.create({
                floor: floor,
                room_type: room_type,
                room_cost: room_cost,
                photo: photoName,
                room_number: room_number
              }));

            case 11:
              newRoom = _context.sent;
              return _context.abrupt("return", res.status(201).json({
                message: 'Комната успешно добавлена!',
                room: newRoom
              }));

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0);
              return _context.abrupt("return", res.status(500).json({
                message: 'Ошибка при добавлении комнаты'
              }));

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 15]]);
    }
  }, {
    key: "getAll",
    value: function getAll(req, res) {
      var _req$query, floor, room_type, room_cost, photo, room_number, limit, page, offset, rooms;

      return regeneratorRuntime.async(function getAll$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _req$query = req.query, floor = _req$query.floor, room_type = _req$query.room_type, room_cost = _req$query.room_cost, photo = _req$query.photo, room_number = _req$query.room_number, limit = _req$query.limit, page = _req$query.page;
              page = parseInt(page) || 1;
              limit = parseInt(limit) || 10;
              offset = (page - 1) * limit;

              if (!(!room_type && !room_cost)) {
                _context2.next = 8;
                break;
              }

              _context2.next = 7;
              return regeneratorRuntime.awrap(Room.findAndCountAll({
                limit: limit,
                offset: offset
              }));

            case 7:
              rooms = _context2.sent;

            case 8:
              if (!(room_type && !room_cost)) {
                _context2.next = 12;
                break;
              }

              _context2.next = 11;
              return regeneratorRuntime.awrap(Room.findAndCountAll({
                where: {
                  room_type: room_type,
                  limit: limit,
                  offset: offset
                }
              }));

            case 11:
              rooms = _context2.sent;

            case 12:
              if (!(!room_type && room_cost)) {
                _context2.next = 16;
                break;
              }

              _context2.next = 15;
              return regeneratorRuntime.awrap(Room.findAndCountAll({
                where: {
                  room_cost: room_cost,
                  limit: limit,
                  offset: offset
                }
              }));

            case 15:
              rooms = _context2.sent;

            case 16:
              if (!(room_type && room_cost)) {
                _context2.next = 20;
                break;
              }

              _context2.next = 19;
              return regeneratorRuntime.awrap(Room.findAndCountAll({
                where: {
                  room_type: room_type,
                  room_cost: room_cost,
                  limit: limit,
                  offset: offset
                }
              }));

            case 19:
              rooms = _context2.sent;

            case 20:
              return _context2.abrupt("return", res.json(rooms));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "getOne",
    value: function getOne(req, res) {
      var id, room;
      return regeneratorRuntime.async(function getOne$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = req.params.id;
              _context3.next = 3;
              return regeneratorRuntime.awrap(Room.findOne({
                where: {
                  room_id: id
                } // include: [
                //   {
                //     model: Room,
                //   },
                // ],

              }));

            case 3:
              room = _context3.sent;
              return _context3.abrupt("return", res.json(room));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }]);

  return RoomControllers;
}();

module.exports = new RoomControllers();