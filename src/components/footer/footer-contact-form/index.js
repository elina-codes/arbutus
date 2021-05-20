import React from "react"
import useStyles from "./styles"
import { Section } from "components"
import images from "src/images"
import { ContactForm } from "src/components"
import ScrollAnimation from "react-animate-on-scroll"

const FooterContactForm = () => {
  const classes = useStyles()

  return (
    <Section className={classes.root}>
      <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
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
      </ScrollAnimation>
    </Section>
  )
}

export default FooterContactForm
