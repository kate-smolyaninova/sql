import { makeAutoObservable } from 'mobx'

export default class RoomStore {
  constructor() {
    this._rooms = []
    this._selectedType = ''
    makeAutoObservable(this)
  }

  setSelectedType(type) {
    this._selectedType = type
  }

  setRoom(rooms) {
    this._rooms = rooms
  }

  get rooms() {
    return this._rooms
  }

  get selectedType() {
    return this._selectedType
  }

  get uniqueRoomTypes() {
    const types = this._rooms.map((room) => room.room_type)
    const uniqueTypes = [...new Set(types)]
    const fixedTypes = ['Эконом', 'Стандартный', 'Семейный', 'Делюкс', 'Люкс']
    return [...new Set([...uniqueTypes, ...fixedTypes])]
  }
}
