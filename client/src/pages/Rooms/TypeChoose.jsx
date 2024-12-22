import { useContext, useState } from 'react'
import styles from './Rooms.module.css'
import { Context } from './../../index'
import { observer } from 'mobx-react-lite'
import { FaFilter } from 'react-icons/fa'

const TypeChoose = () => {
  const { rooms } = useContext(Context)

  return (
    <div className={styles.chooseWrap}>
      <div className={styles.allTypes}>
        {rooms.uniqueRoomTypes.map((type) => (
          <button
            className={
              type === rooms.selectedTypes.room_type ? styles.active : ''
            }
            key={type}
            onClick={() => {
              const selectedRoom = rooms.rooms.find(
                (room) => room.room_type === type
              )
              rooms.setSelectedType(selectedRoom)
            }}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}
export default TypeChoose
