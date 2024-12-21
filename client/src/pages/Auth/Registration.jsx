import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Auth.module.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../untils/consts'

const Registration = () => {
  return (
    <div className={styles.card}>
      <h1>Регистрация</h1>
      <input placeholder="Введите имя" />
      <input placeholder="Введите email" />
      <input placeholder="Введите пароль" />
      <input placeholder="Введите телефон" />
      <div className={styles.links}>
        <div>
          Уже есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите</Link>
        </div>
        <button> Зарегистрироваться </button>
      </div>
    </div>
  )
}
export default Registration
