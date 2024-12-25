import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Auth.module.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../untils/consts'
import { login, registration } from '../../http/userAPI'
import { useContext, useState } from 'react'
import { Context } from './../../index'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user } = useContext(Context)

  const click = async () => {
    try {
      let data
      data = await login(email, password)

      // console.log(data)
      // console.log(user._isAuth)

      user.setUser(data)
      user.setIsAuth(true)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <div className={styles.card}>
      <h1>Авторизация</h1>
      <input
        placeholder="Введите email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Введите пароль"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.links}>
        <div>
          Нет аккаунта?
          <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
        </div>
        <button onClick={click}> Войти </button>
      </div>
    </div>
  )
}
export default Login
