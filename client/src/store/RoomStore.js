import { makeAutoObservable } from 'mobx'

export default class RoomStore {
  constructor() {
    this._rooms = [
      {
        room_id: 3,
        room_number: 202,
        floor: 2,
        photo: './jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg',
        room_type: 'Делюкс',
        room_cost: 5000,
      },
      {
        room_id: 4,
        room_number: 203,
        floor: 2,
        photo:
          'https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw',
        room_type: 'Люкс',
        room_cost: 6000,
      },
      {
        room_id: 5,
        room_number: 204,
        floor: 2,
        photo:
          'https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw',
        room_type: 'Люкс',
        room_cost: 6500,
      },
      {
        room_id: 6,
        room_number: 205,
        floor: 2,
        photo:
          'https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw',
        room_type: 'Стандартный',
        room_cost: 2000,
      },
      {
        room_id: 7,
        room_number: 206,
        floor: 2,
        photo:
          'https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw',
        room_type: 'Семейный',
        room_cost: 3500,
      },
      {
        room_id: 8,
        room_number: 207,
        floor: 2,
        photo:
          'https://unsplash.com/photos/3d-render-of-luxury-hotel-room-with-double-bed-gTA4bkiD2Xw',
        room_type: 'Эконом',
        room_cost: 3500,
      },
    ]

    this._selectedType = {}
    // this._types = ['Эконом', 'Стандартный', 'Семейный', 'Делюкс', 'Люкс']

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

  get selectedTypes() {
    return this._selectedType
  }

  get uniqueRoomTypes() {
    const types = this._rooms.map((room) => room.room_type)
    return [...new Set(types)]
  }
}
