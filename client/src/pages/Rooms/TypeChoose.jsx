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
        {rooms._types.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  )
}
export default TypeChoose
