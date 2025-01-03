import Admin from './pages/Admin/Admin'
import {
  ADMIN_ROUTE,
  ALLROOMS_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ROOM_ROUTE,
  BOOKINGS_ROUTE,
  ROOMS_TABLE,
  USER_TABLE,
  BOOKING_TABLE,
} from './untils/consts'
import Cart from './pages/Cart/Cart'
import Rooms from './pages/Rooms/Rooms'
import RoomPage from './pages/Rooms/RoomPage'
import Auth from './pages/Auth/Auth'
import RoomsTable from './pages/Rooms/RoomsTable'
import UserTable from './pages/UserTable/UserTable'
import BookingTable from './pages/BookingTable/BookingTable'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },

  {
    path: CART_ROUTE,
    Component: Cart,
  },
  {
    path: BOOKINGS_ROUTE,
    Component: Cart,
  },
  {
    path: ROOMS_TABLE,
    Component: RoomsTable,
  },
  {
    path: USER_TABLE,
    Component: UserTable,
  },
  {
    path: BOOKING_TABLE,
    Component: BookingTable,
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
