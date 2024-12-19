import { makeAutoObservable } from 'mobx'

export default class RoomStore {
  constructor() {
    // _ означает что переменная изменяться не может

    makeAutoObservable(this)
  }

  setIsAuth(bool) {
    this._isAuth = bool
  }

  setIsUser(user) {
    this._isAuth = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
