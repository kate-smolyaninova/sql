import { Link, NavLink, useLocation } from 'react-router-dom'
import styles from './Auth.module.css'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../untils/consts'
import Login from './Login'
import Registration from './Registration'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location)

  return (
    <div className="container">
      <div className={styles.wrapper}>
        {isLogin ? <Login /> : <Registration />}
      </div>
    </div>
  )
}

export default Auth
