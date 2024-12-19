import { Switch, Route, Navigate, Routes } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { ALLROOMS_ROUTE } from '../untils/consts'
import { useContext } from 'react'
import { Context } from '..'

const AppRouter = () => {
  const {user} = useContext(Context)
  return (
    <Routes>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} exact />
        ))}
      {/* exact (ключ) - путь будет точно совпадать */}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} exact />
      ))}
      <Route path="*" element={<Navigate to={ALLROOMS_ROUTE} replace />} />
    </Routes>
  )
}
export default AppRouter
