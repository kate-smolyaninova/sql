import Admin from './pages/Admin/Admin'
import {
  ADMIN_ROUTE,
  ALLROOMS_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ROOM_ROUTE,
} from './untils/consts'
import Cart from './pages/Cart'
import Rooms from './pages/Rooms/Rooms'
import RoomPage from './pages/Rooms/RoomPage'
import Auth from './pages/Auth/Auth'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: CART_ROUTE,
    Component: Cart,
  },
]

export const publicRoutes = [
  {
    path: ALLROOMS_ROUTE,
    Component: Rooms,
  },
  {
    path: ROOM_ROUTE + '/:id',
    Component: RoomPage,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
]
