import React, { ReactNode } from 'react'
import { block } from '../../../etc/utils'
import styles from './index.module.css'

type ModalTitlePropsType = {
  align?: 'left' | 'center' | 'right'
  border?: 'normal' | 'bold' | 'none'
  children?: ReactNode
}

const ModalTitle: React.FC<ModalTitlePropsType> = (props) => {
  const { align = 'center', border = 'normal', children } = props
  return (
    <div className={styles.title} data-align={align} data-border={border}>
      {children}
    </div>
  )
}

export default ModalTitle
