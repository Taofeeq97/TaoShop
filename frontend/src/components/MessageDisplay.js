import React from 'react'
import { Alert } from 'react-bootstrap'

const MessageDisplay = ({variant, children}) => {
  return (
    <Alert variant={variant}>
      {children}
    </Alert>
  )
}

export default MessageDisplay
