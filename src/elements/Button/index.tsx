import React, { ReactNode } from 'react'
import block from 'bem-cn-lite';
import './index.css'

type ButtonPropsType = {
  onClick: (e: React.SyntheticEvent) => void
  children?: ReactNode
}

const b = block('button')

const Button: React.FC<ButtonPropsType> = (props) => {
  const { onClick, children } = props
  return (
    <button className={b()} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
