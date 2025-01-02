import { useState } from 'react'
import styles from './Admin.module.css'
import ModalWindowRoom from './ModalWindowRoom'
import ModalWinowClient from './ModalWinowClient'
import ModalWindowBooking from './ModalWindowBooking'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import {
  BOOKING_TABLE,
  BOOKINGS_ROUTE,
  ROOMS_TABLE,
  USER_TABLE,
} from '../../untils/consts'

const Admin = () => {
  const [click, setClick] = useState(false)
  const [clickClient, setClickClient] = useState(false)
  const [clickBooking, setClickBookin] = useState(false)

  const handleClick = () => {
    setClick((prev) => !prev)
  }

  const handleClickClient = () => {
    setClickClient((prev) => !prev)
  }

  const handleClickBookin = () => {
    setClickBookin((prev) => !prev)
  }

  return (
    <div className="container">
      <div className={styles.adminPanel}>
        <button onClick={handleClick}> Добавить комнату </button>
        {click && <ModalWindowRoom />}
        <button onClick={handleClickClient}> Добавить клиента </button>
        {clickClient && <ModalWinowClient />}
        <button>
          <Link to={BOOKINGS_ROUTE}> Добавить бронирование</Link>
        </button>
        <button>
          <Link to={ROOMS_TABLE}> ВСЕ КОМНАТЫ </Link>
        </button>
        <button>
          <Link to={BOOKING_TABLE}> ВСЕ БРОНИРОВАНИЯ </Link>
        </button>
        <button>
          <Link to={USER_TABLE}> ВСЕ ПОЛЬЗОВАТЕЛИ </Link>
        </button>
      </div>
    </div>
  )
}
export default Admin
