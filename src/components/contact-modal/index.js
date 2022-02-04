import React, { useContext, useEffect, useState, useCallback } from "react"
import { Dialog, IconButton } from "@material-ui/core"
import { createPortal } from "react-dom"
import { Button, ContactForm, Section } from "src/components"
import { ModalContext } from "src/context"
import {
  IoMdCheckmarkCircleOutline as CheckIcon,
  IoMdClose as CloseIcon,
} from "react-icons/io"

import useStyles from "./styles"
import { Text } from "components"

const ContactModal = () => {
  const classes = useStyles()
  const {
    modalContent: { content },
    renderModal,
    openModal,
  } = useContext(ModalContext)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [secondsRemaining, setSecondsRemaining] = useState(5)

  const setSubmitSuccessToTrue = () => {
    setSubmitSuccess(true)
  }

  const closeModal = useCallback(() => {
    setSubmitSuccess(false)
    renderModal()
  }, [renderModal, setSubmitSuccess])

  useEffect(() => {
    if (submitSuccess) {
      if (secondsRemaining) {
        setTimeout(() => {
          setSecondsRemaining(secondsRemaining - 1)
        }, 1000)
      } else {
        closeModal()
      }
    } else {
      setSecondsRemaining(5)
    }
  }, [secondsRemaining, submitSuccess, closeModal])

  const CloseButton = () => (
    <IconButton
      {...{
        className: classes.closeButton,
        color: "inherit",
        onClick: closeModal,
      }}
    >
      <CloseIcon size={24} />
    </IconButton>
  )

  const SuccessView = () => {
    return (
      <>
        <CheckIcon size={100} color="#7ED321" />
        <Text variant="h3">Success!</Text>
        <Text variant="h4">
          We have received your message and will contact you within one business
          day.
        </Text>
        <Text variant="h4" strong>
          That's our promise to you.
        </Text>
        <Button
          color="primary"
          onClick={closeModal}
          className={classes.successCloseBtn}
        >
          Close
        </Button>
        <Text>
          This will automatically close in{" "}
          <strong>{secondsRemaining} seconds</strong>.
        </Text>
      </>
    )
  }

  if (openModal) {
    return createPortal(
      <Dialog
        {...{
          open: openModal,
          onBackdropClick: closeModal,
          onEscapeKeyDown: closeModal,
          PaperProps: { className: submitSuccess ? "" : "dark" },
        }}
      >
        <CloseButton />
        <Section dense dark={!submitSuccess}>
          {submitSuccess ? (
            <SuccessView />
          ) : (
            <>
              <ContactForm
                showHeader
                showFooter
                submissionCallback={setSubmitSuccessToTrue}
              />
              {content}
            </>
          )}
        </Section>
      </Dialog>,
      document.getElementById("___gatsby")
    )
  }
  return null
}

export default ContactModal
