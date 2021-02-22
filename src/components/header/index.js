import React from "react"
import PropTypes from "prop-types"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import HeaderLink from "./link/index.js"
import useStyles from "./styles"

const topBarLinksMap = new Map([
  ["1-800-510-8040", "tel:18005108040"],
  ["Success Stories", "/"],
  ["Brokers", "/"],
])

const mainBarLinksMap = new Map([
  ["Understand leasing", "/"],
  ["About us", "/"],
  ["Industries we serve", "/"],
  ["FAQ", "/"],
  ["Contact us", "/"],
])

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const topBarLinks = Array.from(topBarLinksMap)
  const mainBarLinks = Array.from(mainBarLinksMap)

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="inherit">
        <Toolbar className={classes.topToolbar} variant="dense">
          <nav>
            <Grid container spacing={2} alignItems="center" justify="flex-end">
              {topBarLinks.map(([text, path]) => (
                <Grid item>
                  <HeaderLink key={`topBarLink-${text}`} to={path}>
                    {text}
                  </HeaderLink>
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
          <Typography variant="h6" className={classes.title}>
            {siteTitle}
          </Typography>
          <nav>
            <Grid container spacing={2} alignItems="center">
              {mainBarLinks.map(([text, path]) => (
                <Grid item>
                  <HeaderLink key={`mainBarLink-${text}`} to={path}>
                    {text}
                  </HeaderLink>
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
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
