import React, { useContext } from "react"
import { Dialog, IconButton } from "@material-ui/core"
import { createPortal } from "react-dom"
import { ContactForm, Section } from "src/components"
import { ModalContext } from "src/context"
import { GrClose as CloseIcon } from "react-icons/gr"
import useStyles from "./styles"

const ContactModal = () => {
  const classes = useStyles()
  const {
    modalContent: { content },
    renderModal,
    openModal,
  } = useContext(ModalContext)

  const CloseButton = () => (
    <div className={classes.closeButtonContainer}>
      <IconButton
        {...{
          className: classes.closeButton,
          size: "small",
          onClick: renderModal,
        }}
      >
        <CloseIcon />
      </IconButton>
    </div>
  )

  if (openModal) {
    return createPortal(
      <Dialog
        {...{
          open: openModal,
          onBackdropClick: renderModal,
          onEscapeKeyDown: renderModal,
          PaperProps: { className: "dark" },
        }}
      >
        <CloseButton />
        <Section dense dark>
          <ContactForm showHeader showFooter />
          {content}
        </Section>
      </Dialog>,
      document.getElementById("___gatsby")
    )
  }
  return null
}

export default ContactModal
