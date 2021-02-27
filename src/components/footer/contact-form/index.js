import React from "react"
import { node } from "prop-types"

const ContactForm = ({ children }) => {
  return <div>Contact form {children}</div>
}

ContactForm.propTypes = {
  children: node,
}

export default ContactForm
