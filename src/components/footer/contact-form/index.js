import React from "react"
import { node } from "prop-types"
import useStyles from "./styles"
import { Section } from "components"
import images from "../images"

const ContactForm = ({ children }) => {
  const classes = useStyles()

  return (
    <Section className={classes.root} bgImage={images.bg.contactForm}>
      <Section dark title="Contact form" className={classes.contactForm}>
        Form Placeholder
      </Section>
    </Section>
  )
}

ContactForm.propTypes = {
  children: node,
}

export default ContactForm
