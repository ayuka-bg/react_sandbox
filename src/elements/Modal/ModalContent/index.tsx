import React, { ReactNode } from 'react'
import { block } from '../../../etc/utils'
import './index.css'

type ModalContentPropsType = {
  padding?: 'default' | 'none'
  children?: ReactNode
}

const b = block('modal-content')

const ModalContent: React.FC<ModalContentPropsType> = (props) => {
  const { padding, children } = props
  return <div className={b({ padding })}>{children}</div>
}

export default ModalContent
