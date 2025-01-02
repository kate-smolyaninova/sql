import styles from './UserTable.module.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserTable = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/user')
        setUsers(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUsers()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/user/${id}`)
      setUsers(users.filter((user) => user.user_id !== id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Ид</th>
            <th>ФИО</th>
            <th>Номер телефона</th>
            <th>email</th>
            <th>Роль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.user_id}>
              <td>{user.user_id}</td>
              <td>{user.user_name}</td>
              <td>{user.user_phone}</td>
              <td>{user.user_email}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDelete(user.user_id)}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default UserTable
