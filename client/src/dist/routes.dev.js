"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publicRoutes = exports.authRoutes = void 0;

var _Admin = _interopRequireDefault(require("./pages/Admin/Admin"));

var _consts = require("./untils/consts");

var _Cart = _interopRequireDefault(require("./pages/Cart/Cart"));

var _Rooms = _interopRequireDefault(require("./pages/Rooms/Rooms"));

var _RoomPage = _interopRequireDefault(require("./pages/Rooms/RoomPage"));

var _Auth = _interopRequireDefault(require("./pages/Auth/Auth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var authRoutes = [{
  path: _consts.ADMIN_ROUTE,
  Component: _Admin["default"]
}, {
  path: _consts.CART_ROUTE,
  Component: _Cart["default"]
}, {
  path: _consts.BOOKINGS_ROUTE,
  Component: _Cart["default"]
}];
exports.authRoutes = authRoutes;
var publicRoutes = [{
  path: _consts.ALLROOMS_ROUTE,
  Component: _Rooms["default"]
}, {
  path: _consts.ROOM_ROUTE + '/:id',
  Component: _RoomPage["default"]
}, {
  path: _consts.LOGIN_ROUTE,
  Component: _Auth["default"]
}, {
  path: _consts.REGISTRATION_ROUTE,
  Component: _Auth["default"]
}];
exports.publicRoutes = publicRoutes;