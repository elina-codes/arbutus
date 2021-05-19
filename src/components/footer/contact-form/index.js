import React from "react"
import { node } from "prop-types"
import useStyles from "./styles"
import { Section } from "components"
import images from "../../../images"

const ContactForm = ({ children }) => {
  const classes = useStyles()

  return (
    <Section className={classes.root}>
      <Section
        dark
        title="Contact form"
        className={classes.contactForm}
        bgImage={images.bg.contactForm}
      >
        Form Placeholder
      </Section>
    </Section>
  )
}

ContactForm.propTypes = {
  children: node,
}

export default ContactForm
