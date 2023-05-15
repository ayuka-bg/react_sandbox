import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './index.module.css'

type ModalPropsType = {
  isOpen: boolean
  size?: 'sm' | 'md' | 'xl'
  children: ReactNode
  onClose: () => void
}

console.log(styles)

const Modal: React.FC<ModalPropsType> = (props) => {
  const { isOpen, children, onClose, size } = props

  useEffect(() => {
    const onEscClose = (e: KeyboardEvent) => {
      console.log(e)
      if (e.key.toLocaleLowerCase() === 'escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onEscClose)
    } else {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', onEscClose)
    }
    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', onEscClose)
    }
  }, [isOpen, onClose])

  const ModalElement = (
    <>
      <div className={styles.modal} aria-modal="true">
        <div className={styles.backdrop} onClick={onClose} />
        <div className={styles.window} data-size={size}>
          <div className={styles.closer} onClick={onClose}>
            {'{ X }'}
          </div>
          {children}
        </div>
      </div>
    </>
  )

  return isOpen ? createPortal(ModalElement, document.body) : null
}

export default Modal
