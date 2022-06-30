import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { block } from '../../etc/utils'
import './index.css'

type ModalPropsType = {
  isOpen: boolean
  size?: 'sm' | 'md' | 'xl'
  children: ReactNode
  onClose: () => void
}

const b = block('modal')

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
      <div className={b()} aria-modal="true">
        <div className={b('backdrop')} onClick={onClose} />
        <div className={b('window', {size})}>
          <div className={b('closer')} onClick={onClose}>
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
