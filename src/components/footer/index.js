import React from "react"
import images from "src/images"
import FooterContactForm from "./footer-contact-form"
import FooterMenu from "./footer-menu"
import Reviews from "./reviews"
import FooterSuccessStories from "./footer-success-stories"
import FooterBlog from "./footer-blog"
import useStyles from "./styles"
import FooterDoubleCta from "./footer-double-cta"

const Footer = ({ showSuccessStories, showBlogPosts, showDoubleCta }) => {
  const classes = useStyles()

  return (
    <>
      {showDoubleCta && <FooterDoubleCta />}
      {showSuccessStories && <FooterSuccessStories />}
      {showBlogPosts && <FooterBlog />}
      <Reviews />
      <FooterContactForm />
      <FooterMenu />
      <footer className={classes.footer}>
        <img
          src={images.bg.navLogo}
          alt="Arbutus Capital logo"
          className={classes.footerLogo}
        />
        <span>
          © {new Date().getFullYear()} ArbutusCapital. All rights reserved.
        </span>
        <div />
      </footer>
    </>
  )
}

export default Footer
