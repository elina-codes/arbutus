/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import "fontsource-roboto"
import { ThemeProvider } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import { ModalProvider } from "src/context"

import "./layout.css"
import theme from "../theme.js"
import { Header, Footer, Section } from "."
import SEO from "./seo"
import { CssBaseline } from "@material-ui/core"

const Layout = ({ topBannerData, children, seo, showSuccessStories }) => {
  const {
    title: bannerTitle,
    description: bannerDescription,
    cta: bannerButton,
    bgImage: bannerBg,
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
        <SEO {...seo} />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
          {topBannerData && (
            <Section
              hero
              title={bannerTitle}
              description={bannerDescription}
              button={bannerButton}
              bgImage={bannerBg}
              headerButtons={headerButtons}
              variant={bannerVariant}
            />
          )}
          {children}
        </main>
        <Footer showSuccessStories={showSuccessStories} />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default Layout
