import { useState } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import styles from './cart.module.css'

const Cart = () => {
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [settlement, setSettlement] = useState(null)
  const [eviction, setEviction] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem('token')
    console.log(email, number, settlement, eviction, token)

    try {
      const response = await axios.post(
        'http://localhost:5000/api/booking/create',
        {
          user_email: email,
          number: number,
          settlement_date: settlement
            ? settlement.toISOString().split('T')[0]
            : null, // Преобразуем дату в формат YYYY-MM-DD
          eviction_date: eviction ? eviction.toISOString().split('T')[0] : null,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      console.log('Booking added:', response.data)

      setEmail('')
      setNumber('')
      setSettlement(null)
      setEviction(null)
    } catch (error) {
      console.error('Error adding booking:', error.response?.data || error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div style={{ display: 'block' }} className={styles.form}>
          <input
            placeholder="Введитe свою почту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Введите № понравившегося номера"
            className="mb-2 mt-2"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <div className={styles.data}>
            <DatePicker
              selected={settlement}
              onChange={(date) => setSettlement(date)}
              placeholderText="Выберите дату заселения"
              dateFormat="yyyy-MM-dd"
            />

            <div>
              <DatePicker
                selected={eviction}
                onChange={(date) => setEviction(date)}
                placeholderText="Выберите дату выселения"
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
