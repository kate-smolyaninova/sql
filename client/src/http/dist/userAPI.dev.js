"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.check = exports.login = exports.registration = void 0;

var _ = require(".");

var _jwtDecode = require("jwt-decode");

var registration = function registration(user_name, user_phone, user_email, user_password) {
  var _ref, data;

  return regeneratorRuntime.async(function registration$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_.$host.post('http://localhost:5000/api/user/registration', {
            user_name: user_name,
            user_phone: user_phone,
            user_email: user_email,
            user_password: user_password,
            role: 'USER'
          }));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          localStorage.setItem('token', data.token);
          return _context.abrupt("return", (0, _jwtDecode.jwtDecode)(data.token));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.registration = registration;

var login = function login(user_email, user_password) {
  var _ref2, data;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_.$host.post('http://localhost:5000/api/user/login', {
            user_email: user_email,
            user_password: user_password
          }));

        case 2:
          _ref2 = _context2.sent;
          data = _ref2.data;
          localStorage.setItem('token', data.token);
          console.log(data.token);
          return _context2.abrupt("return", (0, _jwtDecode.jwtDecode)(data.token));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.login = login;

var check = function check() {
  var _ref3, data;

  return regeneratorRuntime.async(function check$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_.$authHost.get('http://localhost:5000/api/user/auth'));

        case 2:
          _ref3 = _context3.sent;
          data = _ref3.data;
          localStorage.setItem('token', data.token);
          return _context3.abrupt("return", (0, _jwtDecode.jwtDecode)(data.token));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.check = check;