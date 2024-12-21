import { useContext, useState } from 'react'
import styles from './Rooms.module.css'
import { Context } from './../../index'
import { observer } from 'mobx-react-lite'
import { FaFilter } from 'react-icons/fa'

import photo from './../../store/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg'
import TypeChoose from './TypeChoose'

const Rooms = observer(() => {
  const { rooms } = useContext(Context)
  const [filter, setFilter] = useState(false)

  const handleClick = () => {
    setFilter((prev) => !prev)
  }

  const closePopup = () => {
    setFilter(false)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup()
    }
  }

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.filter}>
          <button onClick={handleClick}>
            <FaFilter size={24} />
          </button>
          {filter && (
            <div className={styles.typeChoose} onClick={handleOverlayClick}>
              <TypeChoose />
            </div>
          )}
        </div>
        <div className={styles.cards}>
          {rooms._rooms.map((room) => (
            <div className={styles.card} key={room.room_id}>
              {/* <img src={room.photo} alt={`Комната ${room.room_number}`} /> */}
              <img src={photo} />
              <div className={styles.info}>
                <p className={styles.type}>{room.room_type}</p>
                <button>Выбрать</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
export default Rooms
