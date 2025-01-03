import styles from './Rooms.module.css'
import { IoTimeOutline } from 'react-icons/io5'
import { IoTimeSharp } from 'react-icons/io5'
import { FaWifi } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa6'
import { GiSlippers } from 'react-icons/gi'
import { TbSunFilled } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BsFillPlugFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BsFillVolumeMuteFill } from 'react-icons/bs'
import { IoBedSharp } from 'react-icons/io5'
import { HiHome } from 'react-icons/hi'
import { Context } from './../../index'

import photo from './../../store/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg'
import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchOneRooms } from '../../http/deviceAPI'
import { BOOKINGS_ROUTE } from '../../untils/consts'

const RoomPage = () => {
  //  const { rooms } = useContext(Context)
  const [room, setRoom] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchOneRooms(id)
      .then((data) => {
        if (data) {
          setRoom(data)
        } else {
          console.error('Ошибка: данные не получены')
        }
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных о комнате:', error)
      })
  }, [id])

  return (
    <div className="container">
      <div className={styles.roomPageWrapper}>
        <div>
          <div className={styles.title}>
            <p> {room.room_type}</p>
            <p> № {room.room_number}</p>
            <p> {room.room_cost} ₽</p>
          </div>
          <div className={styles.roomWrapper}>
            <div className={styles.roomImg}>
              <img
                src={'http://localhost:5000/' + room.photo}
                alt={`Комната ${room.room_number}`}
              />
            </div>
            <div className={styles.amenities}>
              <div className={styles.times}>
                <div>
                  <IoTimeOutline />
                  <p>Заезд: 14:00</p>
                </div>
                <div>
                  <IoTimeSharp />
                  <p>Выезд: 12:00</p>
                </div>
              </div>
              <div className={styles.pros}>
                <div>
                  <FaWifi />
                  <p>WI-FI в номере</p>
                </div>

                <div>
                  <FaBath />
                  <p>Ванна</p>
                </div>

                <div>
                  <GiSlippers />
                  <p>Тапочки </p>
                </div>

                <div>
                  <TbSunFilled />
                  <p>Шторы-блэкаут </p>
                </div>

                <div>
                  <BsFillPlugFill />
                  <p>Розетка около кровати </p>
                </div>

                <div>
                  <BsFillCheckCircleFill />
                  <p>Бутилированная вода</p>
                </div>

                <div>
                  <BsFillTelephoneFill />
                  <p>Телефон</p>
                </div>

                <div>
                  <BsFillVolumeMuteFill />
                  <p>Шумоизоляция</p>
                </div>

                <div>
                  <IoBedSharp />
                  <p>Постельное бельё</p>
                </div>

                <div>
                  <HiHome />
                  <p>Отопление</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.booking}>
            <div>
              <Link to={BOOKINGS_ROUTE}>Забронировать</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RoomPage
