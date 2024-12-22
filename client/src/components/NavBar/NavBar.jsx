import { Context } from '../..'
import { ADMIN_ROUTE, LOGIN_ROUTE, ROOM_ROUTE } from '../../untils/consts'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  return (
    <div className="container">
      <div className={styles.navBar}>
        <Link to={ROOM_ROUTE}>U KATYUSHI</Link>
        {user.isAuth ? (
          <div className={styles.linksWrapper}>
            <Link to={ADMIN_ROUTE} className={styles.link}>
              Aдмин панель
            </Link>
            <Link to={LOGIN_ROUTE} className={styles.link}>
              Выйти
            </Link>
          </div>
        ) : (
          <div className={styles.linksWrapper}>
            <Link to={LOGIN_ROUTE} className={styles.link}>
              Авторизация
            </Link>
          </div>
        )}
      </div>
    </div>
  )
})
export default NavBar
