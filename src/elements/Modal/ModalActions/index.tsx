import React, { ReactNode } from 'react'
import { block } from '../../../etc/utils'
import Button from '../../Button'
import './index.css'

type ModalActionsPropsType = {
  onSubmit?: (e: React.SyntheticEvent) => void
  onAbort?: (e: React.SyntheticEvent) => void
  children?: ReactNode
}

const b = block('modal-actions')

const ModalActions: React.FC<ModalActionsPropsType> = (props) => {
  const { onSubmit, onAbort, children } = props
  const withActions = !!onSubmit || !!onAbort
  return (
    <div className={b({ with_actions: withActions })}>
      {onAbort && <Button onClick={onAbort}>Отмена</Button>}
      {onSubmit && <Button onClick={onSubmit}>Сохранить</Button>}
      {children}
    </div>
  )
}

export default ModalActions
