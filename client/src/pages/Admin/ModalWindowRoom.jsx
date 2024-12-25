import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import { useState, useContext } from 'react'
import { Context } from './../../index'
import { createRoom } from '../../http/deviceAPI'

const ModalWindowRoom = () => {
  const { rooms } = useContext(Context)

  const [floor, setFloor] = useState()
  const [photo, setPhoto] = useState()
  const [cost, setCost] = useState()
  const [number, setNumber] = useState()
  const [type, setType] = useState()

  const selectedFile = (e) => {
    setPhoto(e.target.files[0])
    console.log(e.target.files[0])
  }

  const addType = () => {
    console.log('Отправляемые данные:', {
      floor,
      room_number: number,
      room_cost: cost,
      room_type: type,
      photo: photo[0],
    })

    const formData = new FormData()
    formData.append('floor', `${floor}`)
    formData.append('room_type', type)
    formData.append('room_cost', `${cost}`)
    formData.append('room_number', `${number}`)
    formData.append('photo', photo[0])

    createRoom(formData)
  }

  return (
    <div className="container">
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Таблица "Комнаты"</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Control
              placeholder="Введите № номера"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Form.Control
              placeholder="Введите этаж номера"
              className="mb-2 mt-2"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />

            <Dropdown className="mb-2 mt-2">
              <Dropdown.Toggle variant="outline" id="dropdown-basic">
                {type || 'Введите тип номера'}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {rooms.uniqueRoomTypes &&
                  rooms.uniqueRoomTypes.map((roomType) => (
                    <Dropdown.Item
                      key={roomType}
                      onClick={() => setType(roomType)}
                    >
                      {roomType}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
              placeholder="Введите стоимость номера"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />

            <Form.Control
              placeholder="Загрузите фото номера"
              type="file"
              className="mb-2 mt-2"
              onChange={selectedFile}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline" onClick={addType}>
              Добавить
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  )
}

export default ModalWindowRoom
