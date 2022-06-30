import React, { ReactNode } from 'react'
import { block } from '../../../etc/utils'
import './index.css';

const b = block('modal-title')

type ModalTitlePropsType = {
  align?: 'left' | 'center' | 'right'
  border?: 'normal' | 'bold' | 'none'
  children?: ReactNode
}

const ModalTitle: React.FC<ModalTitlePropsType> = (props) => {
  const { align = 'center', border = 'normal', children } = props
  return <div className={b({ align, border })}>{children}</div>
}

export default ModalTitle
