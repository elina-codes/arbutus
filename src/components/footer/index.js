import React from "react"
import FooterContactForm from "./footer-contact-form"
import FooterMenu from "./footer-menu"
import Reviews from "./reviews"
import FooterSuccessStories from "./footer-success-stories"
import useStyles from "./styles"

const Footer = ({ showSuccessStories }) => {
  const classes = useStyles()

  return (
    <>
      {showSuccessStories && <FooterSuccessStories />}
      <Reviews />
      <FooterContactForm />
      <FooterMenu />
      <footer className={classes.footer}>© {new Date().getFullYear()}</footer>
    </>
  )
}

export default Footer
