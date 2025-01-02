import React, { useEffect, useState } from 'react'
import axios from 'axios'

const RoomsTable = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/room')
        setRooms(response.data.rows)
      } catch (err) {
        console.log(err)
      }
    }

    fetchRooms()
  }, [])

  const handleDelete = async (roomId) => {
    try {
      await axios.delete(`http://localhost:5000/api/room/${roomId}`)
      setRooms(rooms.filter((room) => room.room_id !== roomId))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <h2>Список комнат</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Ид</th>
            <th>Фото</th>
            <th>№ номера</th>
            <th>Этаж</th>
            <th>Тип номера</th>
            <th>Стоимость</th>
            <th>Забронирован</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room.room_id}>
              <td>{room.room_id}</td>
              <td>
                {room.photo ? (
                  <img
                    src={`/static/${room.photo}`}
                    alt="Room"
                    style={{ width: '100px' }}
                  />
                ) : (
                  'Нет фото'
                )}
              </td>
              <td>{room.room_number}</td>
              <td>{room.floor}</td>
              <td>{room.room_type}</td>
              <td>{room.room_cost} ₽</td>
              <td>{room.is_booked ? 'Да' : 'Нет'}</td>
              <td>
                <button onClick={() => handleDelete(room.room_id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RoomsTable
