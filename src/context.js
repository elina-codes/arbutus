import { ContactModal } from "components"
import React from "react"
import { createContext, useState } from "react"

const useModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState("I'm the Modal Content")

  const closeModal = () => {
    setOpenModal(false)
  }

  const renderModal = (data = {}) => {
    setOpenModal(!openModal)
    setModalContent(data)
  }

  return { openModal, renderModal, modalContent, closeModal }
}
const ModalContext = createContext()
const ModalProvider = ({ children }) => {
  const { openModal, renderModal, modalContent, closeModal } = useModal()
  return (
    <ModalContext.Provider
      value={{ openModal, renderModal, modalContent, closeModal }}
    >
      <ContactModal />
      {children}
    </ModalContext.Provider>
  )
}

export { ModalContext, ModalProvider, useModal }
