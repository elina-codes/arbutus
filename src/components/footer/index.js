import React from "react"

import ContactForm from "./contact-form"
import Menu from "./menu"
import Reviews from "./reviews"
import useStyles from "./styles"

const Footer = () => {
  const classes = useStyles()

  return (
    <>
      <Reviews />
      <ContactForm />
      <div className={classes.footer}>
        <Menu />
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Footer
