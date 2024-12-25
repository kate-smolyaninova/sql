"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobx = require("mobx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserStore =
/*#__PURE__*/
function () {
  function UserStore() {
    _classCallCheck(this, UserStore);

    // _ означает что переменная изменяться не может
    this._isAuth = false;
    this._user = {};
    (0, _mobx.makeAutoObservable)(this);
  }

  _createClass(UserStore, [{
    key: "setIsAuth",
    value: function setIsAuth(bool) {
      this._isAuth = bool;
    }
  }, {
    key: "setUser",
    value: function setUser(user) {
      this._user = user;
    }
  }, {
    key: "isAuth",
    get: function get() {
      return this._isAuth;
    }
  }, {
    key: "user",
    get: function get() {
      return this._user;
    }
  }]);

  return UserStore;
}();

exports["default"] = UserStore;