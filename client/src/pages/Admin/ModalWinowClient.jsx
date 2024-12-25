import { useContext, useState } from 'react'
import styles from './Admin.module.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import { Context } from './../../index'
import axios from 'axios'

const ModalWinowClient = () => {
  const { room } = useContext(Context)

  const [userName, setUserName] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:5000/api/user/registration',
        {
          user_name: userName,
          user_phone: userPhone,
          user_email: userEmail,
          user_password: userPassword,
          role: 'USER',
        }
      )

      console.log('Client added:', response.data)

      setUserName('')
      setUserPhone('')
      setUserEmail('')
      setUserPassword('')
    } catch (error) {
      console.error('Error adding client:', error.response.data)
    }
  }

  return (
    <div>
      <div className="container">
        <div style={{ display: 'block' }} className={styles.form}>
          <input
            placeholder="Введите имя"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

          <input
            placeholder="Введите номер телефона"
            className="mb-2 mt-2"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
          />

          <input
            placeholder="Введите email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <input
            placeholder="Придумайте пароль"
            className="mb-2 mt-2"
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Добавить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalWinowClient
