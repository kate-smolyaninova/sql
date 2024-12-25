import { $authHost, $host } from '.'
import { jwtDecode } from 'jwt-decode'

export const createRoom = async (
  floor,
  photo,
  room_type,
  room_cost,
  room_number
) => {
  const { data } = await $authHost.post(
    'http://localhost:5000/api/room/create',
    {
      floor,
      photo,
      room_type,
      room_cost,
      room_number,
    }
  )

  return data
}

export const fetchRooms = async () => {
  const { data } = await $host.get('http://localhost:5000/api/room')

  return data
}

export const fetchOneRooms = async (id) => {
  const { data } = await $host.get(`http://localhost:5000/api/room/${id}`)

  return data
}
