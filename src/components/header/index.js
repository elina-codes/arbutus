import React from "react"
import { bool, string, element, func } from "prop-types"
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

const topBarLinks = [
  {
    title: "1-800-510-8040",
    href: "tel:18005108040",
    external: true,
  },
  {
    title: "Success Stories",
    href: "/",
  },
  {
    title: "Brokers",
    href: "/",
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

HideOnScroll.propTypes = {
  children: element.isRequired,
  window: func,
}

const NavLink = ({ title, href, external }) => (
  <Grid item>
    <Link {...{ to: href, external, color: "inherit" }}>{title}</Link>
  </Grid>
)
NavLink.propTypes = {
  title: string,
  href: string,
  external: bool,
}

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
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="span" className={classes.title}>
              <Link to="/">{siteTitle}</Link>
            </Typography>
            <nav>
              <Grid container spacing={2} alignItems="center">
                {placeholderData.navData.map(item => (
                  <NavLink {...item} key={`mainBarLink-${item.title}`} />
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
