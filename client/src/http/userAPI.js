import { $authHost, $host } from '.'
import { jwtDecode } from 'jwt-decode'

export const registration = async (
  user_name,
  user_phone,
  user_email,
  user_password
) => {
  const { data } = await $host.post(
    'http://localhost:5000/api/user/registration',
    {
      user_name,
      user_phone,
      user_email,
      user_password,
      role: 'USER',
    }
  )
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}

export const login = async (user_email, user_password) => {
  const { data } = await $host.post('http://localhost:5000/api/user/login', {
    user_email,
    user_password,
  })

  localStorage.setItem('token', data.token)
  console.log(data.token)
  return jwtDecode(data.token)
}

export const check = async () => {
  const { data } = await $authHost.get('http://localhost:5000/api/user/auth')
  localStorage.setItem('token', data.token)
  return jwtDecode(data.token)
}
