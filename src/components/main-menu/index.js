import { routes, phoneNumber } from "src/constants"
import React from "react"
import {
  AppBar,
  Toolbar,
  // IconButton,
  Grid,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from "@material-ui/core"
// import MenuIcon from "@material-ui/icons/Menu"
import { OpenContactModalButton, Link, Text } from "components"
import useStyles from "./styles"
import images from "src/images"

const { howItWorks, aboutUs, industries, faq, contactUs } = routes
const mainBarLinks = [
  {
    title: howItWorks.title,
    href: howItWorks.path,
  },
  {
    title: aboutUs.title,
    href: aboutUs.path,
  },
  {
    title: industries.title,
    href: industries.path,
  },
  {
    title: faq.title,
    href: faq.path,
  },
  {
    title: contactUs.title,
    href: contactUs.path,
  },
]

const topBarLinks = [
  {
    title: phoneNumber.text,
    href: phoneNumber.href,
    external: true,
  },
  {
    title: routes.successStories.title,
    href: routes.successStories.path,
  },
  {
    title: routes.brokers.title,
    href: routes.brokers.path,
  },
]

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const NavLink = ({ title, href, external }) => (
  <Grid item>
    <Link {...{ href, external, color: "inherit" }}>{title}</Link>
  </Grid>
)

const Header = ({ siteTitle, ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="inherit">
          <Toolbar className={classes.topToolbar} variant="dense">
            <nav>
              <Grid
                container
                spacing={2}
                alignItems="center"
                justify="flex-end"
              >
                {topBarLinks.map(item => (
                  <NavLink {...item} key={`topBarLink-${item.title}`} />
                ))}
              </Grid>
            </nav>
          </Toolbar>
          <Toolbar className={classes.mainToolbar}>
            {/* <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton> */}
            <Text
              variant="h6"
              component="span"
              className={classes.title}
              style={{ marginBottom: 0 }}
            >
              <Link to="/" style={{ display: "flex" }}>
                <img
                  src={images.bg.navLogo}
                  alt="Arbutus Capital"
                  className={classes.navLogo}
                />
              </Link>
            </Text>
            <nav>
              <Grid container spacing={2} alignItems="center">
                {mainBarLinks.map(item => (
                  <NavLink {...item} key={`mainBarLink-${item.title}`} />
                ))}
                <Grid item>
                  <OpenContactModalButton>Get started</OpenContactModalButton>
                </Grid>
              </Grid>
            </nav>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar variant="dense" />
      <Toolbar />
    </div>
  )
}

export default Header
