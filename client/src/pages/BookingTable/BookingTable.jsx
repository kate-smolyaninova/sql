import styles from './BookingTable.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BookingTable = () => {
  const [booking, setBooking] = useState([])

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/booking')
        setBooking(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchBooking()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/booking/${id}`)
      setBooking(booking.filter((booking) => booking.booking_id !== id))
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Ид</th>
            <th>Ид пользователя</th>
            <th>Ид комнаты</th>
            <th>Статус</th>
            <th>Стоимость бронирования</th>
            <th>Дата заселения</th>
            <th>Дата выселения</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {booking.map((booking) => (
            <tr key={booking.booking_id}>
              <td>{booking.booking_id}</td>
              <td>{booking.user_email}</td>
              <td>{booking.room_number}</td>
              <td>{booking.booking_status}</td>
              <td>{booking.booking_cost}</td>
              <td>{booking.settlement_date}</td>
              <td>{booking.eviction_date}</td>
              <td>
                <button onClick={() => handleDelete(booking.booking_id)}>
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
export default BookingTable
