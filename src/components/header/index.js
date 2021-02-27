import React from "react"
import { string, element, func } from "prop-types"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
  useScrollTrigger,
  Slide,
  CssBaseline,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { Link } from "components"
import useStyles from "./styles"
import placeholderData from "src/placeholder-data"

const topBarLinksMap = new Map([
  ["1-800-510-8040", "tel:18005108040"],
  ["Success Stories", "/"],
  ["Brokers", "/"],
])

const HideOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.propTypes = {
  children: element.isRequired,
  window: func,
}

const Header = ({ siteTitle, ...props }) => {
  const classes = useStyles()
  const topBarLinks = Array.from(topBarLinksMap)

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
                {topBarLinks.map(([text, path]) => (
                  <Grid item key={`topBarLink-${text}`}>
                    <Link href={path}>{text}</Link>
                  </Grid>
                ))}
              </Grid>
            </nav>
          </Toolbar>
          <Toolbar className={classes.mainToolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="span" className={classes.title}>
              {siteTitle}
            </Typography>
            <nav>
              <Grid container spacing={2} alignItems="center">
                {placeholderData.navData.map(({ title, href }) => (
                  <Grid item key={`mainBarLink-${title}`}>
                    <Link href={href}>{title}</Link>
                  </Grid>
                ))}
                <Grid item>
                  <Button color="secondary" variant="contained">
                    Get started
                  </Button>
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

Header.propTypes = {
  siteTitle: string,
}

export default Header
