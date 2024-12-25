import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Auth.module.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../untils/consts'
import { login, registration } from '../../http/userAPI'
import { useContext, useState } from 'react'
import { Context } from './../../index'

const Registration = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user } = useContext(Context)

  const click = async () => {
    let data
    try {
      data = await registration(name, phone, email, password)

      console.log(data)
      user.setUser(data)
      user.setIsAuth(true)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <div className={styles.card}>
      <h1>Регистрация</h1>
      <input
        placeholder="Введите имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Введите телефон"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        placeholder="Введите email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Введите пароль"
        // type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.links}>
        <div>
          Уже есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите</Link>
        </div>
        <button onClick={click}> Зарегистрироваться </button>
      </div>
    </div>
  )
}
export default Registration
