import { Context } from '../..'
import {
  ADMIN_ROUTE,
  BOOKINGS_ROUTE,
  LOGIN_ROUTE,
  ROOM_ROUTE,
} from '../../untils/consts'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = observer(() => {
  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  const { user } = useContext(Context)
  return (
    <div className="container">
      <div className={styles.navBar}>
        <Link to={ROOM_ROUTE}>U KATYUSHI</Link>

        {!user.isAuth && (
          <div className={styles.linksWrapper}>
            <Link to={LOGIN_ROUTE} className={styles.link}>
              Авторизация
            </Link>
          </div>
        )}

        {user.isAuth && user._user.role === 'USER' && (
          <div className={styles.linksWrapper}>
            <Link to={BOOKINGS_ROUTE} className={styles.link}>
              Мои бронирования
            </Link>
            <Link to={LOGIN_ROUTE} className={styles.link} onClick={logOut}>
              Выйти
            </Link>
          </div>
        )}

        {user.isAuth && user._user.role === 'ADMIN' && (
          <div className={styles.linksWrapper}>
            <Link to={ADMIN_ROUTE} className={styles.link}>
              Aдмин панель
            </Link>
            <Link to={LOGIN_ROUTE} className={styles.link} onClick={logOut}>
              Выйти
            </Link>
          </div>
        )}
      </div>
    </div>
  )
})
export default NavBar
