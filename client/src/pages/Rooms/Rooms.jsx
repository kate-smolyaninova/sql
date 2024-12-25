import { useContext, useEffect, useState } from 'react'
import styles from './Rooms.module.css'
import { Context } from './../../index'
import { observer } from 'mobx-react-lite'
import { FaFilter } from 'react-icons/fa'

import photo from './../../store/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg'
import TypeChoose from './TypeChoose'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ROOM_ROUTE } from '../../untils/consts'
import { fetchRooms } from '../../http/deviceAPI'

const Rooms = observer(() => {
  const { rooms } = useContext(Context)
  const [filter, setFilter] = useState(false)

  const handleClick = () => {
    setFilter((prev) => !prev)
  }

  useEffect(() => {
    fetchRooms()
      .then((data) => {
        rooms.setRoom(data.rows)
      })
      .catch((error) => {
        console.error('Ошибка при загрузке комнат', error)
      })
  }, [])

  const filteredRooms = rooms.selectedType
    ? rooms._rooms.filter((room) => room.room_type === rooms.selectedType)
    : rooms._rooms

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <button onClick={handleClick}>
            <FaFilter size={24} />
          </button>
          {filter && (
            <div className={styles.typeChoose} onClick={handleClick}>
              <TypeChoose />
            </div>
          )}
        </div>
        <div className={styles.cards}>
          {filteredRooms.map((room) => (
            <Link
              className={styles.card}
              key={room.room_id}
              to={ROOM_ROUTE + '/' + room.room_id}
            >
              <img
                src={'http://localhost:5000/' + room.photo}
                alt={`Комната ${room.room_number}`}
              />
              <div className={styles.info}>
                <p className={styles.type}>{room.room_type}</p>
                <button>Выбрать</button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Rooms
