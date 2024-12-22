import { useState } from 'react'
import styles from './Admin.module.css'
import ModalWindowRoom from './ModalWindowRoom'
import ModalWinowClient from './ModalWinowClient'
import ModalWindowBooking from './ModalWindowBooking'

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
        <button onClick={handleClickBookin}> Добавить бронирование</button>
        {clickBooking && <ModalWindowBooking />}
      </div>
    </div>
  )
}
export default Admin
