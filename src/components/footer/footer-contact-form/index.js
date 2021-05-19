import React from "react"
import useStyles from "./styles"
import { Section } from "components"
import images from "src/images"
import { ContactForm } from "src/components"

const FooterContactForm = () => {
  const classes = useStyles()

  return (
    <Section className={classes.root}>
      <Section
        dark
        inner
        className={classes.footerContactForm}
        bgImage={images.bg.contactForm}
      >
        <div className={classes.formContainer}>
          <ContactForm showHeader />
        </div>
      </Section>
    </Section>
  )
}

export default FooterContactForm
