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
    ]

    this._types = ['Эконом', 'Стандартный', 'Семейный', 'Делюкс', 'Люкс']

    makeAutoObservable(this)
  }

  setRoom(rooms) {
    this._rooms = rooms
  }

  get isAuth() {
    return this._rooms
  }
}
