/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import "fontsource-roboto-slab"
import "fontsource-montserrat"
import "fontsource-montserrat/300.css"
import "fontsource-montserrat/500.css"
import "fontsource-montserrat/900.css"
import "fontsource-montserrat/700.css"
import { ThemeProvider } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { ModalProvider } from "src/context"

import "./layout.css"
import theme from "../theme.js"
import { Header, Footer, Section } from "."
import Seo from "./seo"
import { CssBaseline, Fab, Zoom, useScrollTrigger } from "@material-ui/core"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop({ children }) {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  })

  const handleClick = e => {
    const anchor = (e.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  )
}

const Layout = ({
  topBannerData,
  children,
  seo,
  showSuccessStories,
  showDoubleCta,
  ...props
}) => {
  const {
    title: bannerTitle,
    description: bannerDescription,
    cta: bannerButton,
    bgImage: bannerBg,
    topImage,
    headerButtons,
    variant: bannerVariant,
  } = topBannerData || {}

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <CssBaseline />
        <Seo {...seo} />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
          {topBannerData && (
            <Section
              hero
              title={bannerTitle}
              description={bannerDescription}
              button={bannerButton}
              bgImage={bannerBg}
              topImage={topImage}
              headerButtons={headerButtons}
              variant={bannerVariant}
            />
          )}
          {children}
        </main>
        <Footer
          showSuccessStories={showSuccessStories}
          showDoubleCta={showDoubleCta}
        />
        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Layout
