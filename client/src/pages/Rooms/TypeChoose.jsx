import { useContext, useState } from 'react'
import styles from './Rooms.module.css'
import { Context } from './../../index'
import { observer } from 'mobx-react-lite'
import { FaFilter } from 'react-icons/fa'
import RoomStore from '../../store/RoomStore'

const TypeChoose = () => {
  const { rooms } = useContext(Context)

  return (
    <div className={styles.chooseWrap}>
      <div className={styles.allTypes}>
        {rooms.uniqueRoomTypes.map((type) => (
          <button
            className={
              type === rooms.selectedType ? styles.active : '' 
            }
            key={type}
            onClick={() => {
              rooms.setSelectedType(type) 
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
