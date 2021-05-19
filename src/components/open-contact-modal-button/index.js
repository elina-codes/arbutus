import React, { useContext } from "react"
import { Button } from "src/components"
import { ModalContext } from "src/context"

const OpenContactModalButton = ({ children, ...props }) => {
  const { renderModal } = useContext(ModalContext)

  return (
    <Button onClick={renderModal} {...props}>
      {children}
    </Button>
  )
}

export default OpenContactModalButton
