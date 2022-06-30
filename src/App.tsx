import { useState } from 'react'
import './App.css'
import PRIDE from './components/PRIDE'
import Button from './elements/Button'
import Modal from './elements/Modal'
import ModalActions from './elements/Modal/ModalActions'
import ModalContent from './elements/Modal/ModalContent'
import ModalTitle from './elements/Modal/ModalTitle'
function App() {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenInnerModal, setIsOpenInnerModal] = useState(false)
  return (
    <div className="App">
      <h1>Modals components</h1>
      <h2><a href="https://github.com/ayuka-bg/react_sandbox">ссылка на гитхаб</a></h2>
      <Button onClick={() => setIsOpenModal(true)}>open modal</Button>
      <Modal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        size="xl"
      >
        <ModalTitle border="bold">ModalTitle</ModalTitle>
        <ModalContent padding="default">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <h2>Это компонент ModalContent</h2>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder={0}
            ></iframe>
          </div>
        </ModalContent>
        <ModalActions onSubmit={() => setIsOpenInnerModal(true)} />
      </Modal>
      <Modal
        size="xl"
        isOpen={isOpenInnerModal}
        onClose={() => setIsOpenInnerModal(false)}
      >
        <ModalTitle>туц туц туц</ModalTitle>
        <ModalContent>
          <PRIDE />
        </ModalContent>
        <ModalActions
          onSubmit={() => {
            setIsOpenInnerModal(false)
            setIsOpenModal(false)
          }}
        />
      </Modal>
    </div>
  )
}

export default App
