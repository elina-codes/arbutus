import React from "react"
import { node } from "prop-types"
import useStyles from "./styles"

const ContactForm = ({ children }) => {
  const classes = useStyles()

  return <div>Contact form {children}</div>
}

ContactForm.propTypes = {
  children: node,
}

export default ContactForm
