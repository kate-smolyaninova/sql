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

import photo from './../../store/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg'

const RoomPage = () => {
  const rooms = {
    room_id: 3,
    room_number: 202,
    floor: 2,
    photo: './../../store/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg',
    room_type: 'Делюкс',
    room_cost: 5000,
  }

  return (
    <div className="container">
      <div className={styles.roomPageWrapper}>
      <div>
        
        <p className={styles.title}>{rooms.room_type}</p>
        <div className={styles.roomWrapper}>
          <div className={styles.roomImg}>
            {/* <img src={rooms.photo} /> */}
            <img src={photo} />
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
          <button>Забронировать</button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default RoomPage
