import React from "react"
import "fontsource-roboto"
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

  switch (variant) {
    case "successStory":
      articleType = { successStory: true }
      break
    case "blog":
      articleType = { blog: true }
      break

    default:
      break
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Mui.CssBaseline />
        <Seo title={title} />
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
                <ShareButtons url={window.location.href} title={title} />
                {/* <Mui.IconButton>
                  <LinkedInIcon color="inherit" />
                </Mui.IconButton>
                <Mui.IconButton>
                  <TwitterIcon color="inherit" />
                </Mui.IconButton>
                <Mui.IconButton>
                  <FacebookIcon color="inherit" />
                </Mui.IconButton>
                <Mui.IconButton>
                  <EmailIcon color="inherit" />
                </Mui.IconButton> */}
              </div>
            )}
            <div className={classes.articleContent}>{children}</div>
          </Section>
        </main>
        <Footer />
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
