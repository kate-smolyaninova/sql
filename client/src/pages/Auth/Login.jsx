import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Auth.module.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../untils/consts'

const Login = () => {
  return (
    <div className={styles.card}>
      <h1>Авторизация</h1>
      <input placeholder="Введите email" />
      <input placeholder="Введите пароль" />
      <div className={styles.links}>
        <div>
          Нет аккаунта?
          <Link to={REGISTRATION_ROUTE}>Зарегистрируйтесь</Link>
        </div>
        <button> Войти </button>
      </div>
    </div>
  )
}
export default Login
