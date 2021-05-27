import { routes, phoneNumber } from "src/constants"
import React, { useState } from "react"
import * as MUI from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { OpenContactModalButton, Link, Text } from "components"
import useStyles from "./styles"
import images from "src/images"
import classNames from "classnames"

const { whyLease, howItWorks, aboutUs, industries, faq, contactUs } = routes
const mainBarLinks = [
  {
    title: "Understand Leasing",
    sublinks: [
      {
        title: whyLease.title,
        href: whyLease.path,
      },
      {
        title: howItWorks.title,
        href: howItWorks.path,
      },
    ],
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

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

const Header = ({ siteTitle, ...props }) => {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = e => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return
    }
    setMobileOpen(!mobileOpen)
  }

  const HideOnScroll = ({ children, window }) => {
    const trigger = MUI.useScrollTrigger({
      target: window ? window() : undefined,
    })

    return (
      <MUI.Slide appear={false} direction="down" in={!trigger}>
        {children}
      </MUI.Slide>
    )
  }

  function NavLinkWithSubs({ title, sublinks }) {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleSubMenuTriggerClick = e => {
      setAnchorEl(e.currentTarget)
    }

    const handleSubMenuClose = () => {
      setAnchorEl(null)
    }

    return (
      <>
        <MUI.Link
          onClick={handleSubMenuTriggerClick}
          className={classes.navLink}
        >
          {title} ▾
        </MUI.Link>
        <MUI.Menu
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleSubMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {sublinks.map(sublink => (
            <MUI.MenuItem key={sublink.title}>
              <NavLink
                {...sublink}
                key={sublink.title}
                style={{ marginLeft: 0 }}
              />
            </MUI.MenuItem>
          ))}
        </MUI.Menu>
      </>
    )
  }

  function NavLink({ title, sublinks, ...props }) {
    return sublinks ? (
      <NavLinkWithSubs {...{ ...props, title, sublinks }} />
    ) : (
      <Link {...{ ...props, color: "inherit", className: classes.navLink }}>
        {title}
      </Link>
    )
  }

  const TopNav = () => (
    <nav className={classNames(classes.mainMenuNav, classes.mainMenuTopNav)}>
      {topBarLinks.map((item, i) => (
        <NavLink {...item} key={`topBarLink-${item.title}`} />
      ))}
    </nav>
  )

  const MainNav = () => (
    <nav className={classes.mainMenuNav}>
      {mainBarLinks.map(item => (
        <NavLink {...item} key={`mainBarLink-${item.title}`} />
      ))}
      <OpenContactModalButton className={classes.mainNavCta}>
        Get started
      </OpenContactModalButton>
    </nav>
  )

  return (
    <div className={classes.root} id="back-to-top-anchor">
      <MUI.CssBaseline />
      <HideOnScroll {...props}>
        <MUI.AppBar color="inherit">
          <MUI.Hidden smDown>
            <MUI.Toolbar className={classes.topToolbar} variant="dense">
              <TopNav />
            </MUI.Toolbar>
          </MUI.Hidden>
          <MUI.Toolbar className={classes.mainToolbar}>
            <Text variant="h6" component="span" style={{ marginBottom: 0 }}>
              <Link to="/" style={{ display: "flex" }}>
                <img
                  src={images.bg.navLogo}
                  alt="Arbutus Capital logo"
                  className={classes.navLogo}
                />
              </Link>
            </Text>
            <MUI.Hidden mdUp>
              <MUI.IconButton
                aria-label="open menu"
                edge="start"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </MUI.IconButton>
            </MUI.Hidden>
            <MUI.Hidden smDown>
              <MainNav />
            </MUI.Hidden>
            <MUI.Hidden mdUp>
              <MUI.SwipeableDrawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                disableBackdropTransition
                onOpen={handleDrawerToggle}
                onClose={handleDrawerToggle}
                disableDiscovery={iOS}
                classes={{
                  paper: classes.drawerContainer,
                }}
              >
                <MainNav />
                <TopNav />
              </MUI.SwipeableDrawer>
            </MUI.Hidden>
          </MUI.Toolbar>
        </MUI.AppBar>
      </HideOnScroll>
      <MUI.Hidden smDown>
        <MUI.Toolbar variant="dense" />
      </MUI.Hidden>
      <MUI.Toolbar />
    </div>
  )
}

export default Header
