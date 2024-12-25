import styles from './Admin.module.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const ModalWindowBooking = () => {
  return (
    <div>
      <div className="container">
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Таблица "Клиенты"</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Control placeholder="" />
            </Modal.Body>

            <Modal.Footer>
              <Button variant="outline"> Добавить</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    </div>
  )
}
export default ModalWindowBooking
