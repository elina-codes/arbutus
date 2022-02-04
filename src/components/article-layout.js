import React from "react"
import "fontsource-roboto-slab"
import "fontsource-montserrat"
import { ThemeProvider } from "@material-ui/core/styles"
import { ModalProvider } from "src/context"
import * as Mui from "@material-ui/core"

import "./layout.css"
import theme from "../theme.js"
import { Header, Footer, Section } from "."
import Seo from "./seo"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import { makeStyles } from "@material-ui/core/styles"
import ShareButtons from "./social-share"

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  shareButtons: {
    textAlign: "right",
  },
  articleContent: {
    maxWidth: 600,
    textAlign: "left",
    marginLeft: "auto",
    marginRight: "auto",
    "& img": {
      marginLeft: "auto",
      marginRight: "auto",
      display: "block",
    },
    "& h2:not(:first-child), & h3:not(:first-child), & h4:not(:first-child)": {
      marginTop: "1.5em",
    },
    "& a": {
      color: "#4A90E2",
      textDecoration: "none",
    },
  },
}))

function ScrollTop({ children }) {
  const classes = useStyles()
  const trigger = Mui.useScrollTrigger({
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
    <Mui.Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Mui.Zoom>
  )
}

const ArticleLayout = ({
  bgImage,
  title,
  description,
  variant,
  children,
  showShareButtons,
  ...props
}) => {
  const classes = useStyles()
  let articleType = {}
  let footerPostType = {}

  switch (variant) {
    case "successStory":
      articleType = { successStory: true }
      footerPostType = { showSuccessStories: true }
      break
    case "blog":
      articleType = { blog: true }
      footerPostType = { showBlogPosts: true }
      break

    default:
      break
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Mui.CssBaseline />
        <Seo title={title} hideSuffix />
        <Header siteTitle={title || `Article`} />
        <main>
          {title && (
            <Section
              hero
              {...articleType}
              title={title}
              bgImage={bgImage}
              description={description}
            />
          )}
          <Section>
            {showShareButtons && (
              <div className={classes.shareButtons}>
                <ShareButtons url={window?.location?.href} title={title} />
              </div>
            )}
            <div className={classes.articleContent}>{children}</div>
          </Section>
        </main>
        <Footer {...footerPostType} showDoubleCta />
        <ScrollTop {...props}>
          <Mui.Fab
            color="secondary"
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon />
          </Mui.Fab>
        </ScrollTop>
      </ModalProvider>
    </ThemeProvider>
  )
}

export default ArticleLayout
