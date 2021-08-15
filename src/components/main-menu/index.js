import { routes, phoneNumber } from "src/constants"
import React, { useState } from "react"
import * as Mui from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import { OpenContactModalButton, Link } from "components"
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
    const trigger = Mui.useScrollTrigger({
      target: window ? window() : undefined,
    })

    return (
      <Mui.Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Mui.Slide>
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
        <Mui.Link
          onClick={handleSubMenuTriggerClick}
          className={classes.navLink}
        >
          {title} ▾
        </Mui.Link>
        <Mui.Menu
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          keepMounted
          disablePortal
          open={Boolean(anchorEl)}
          onClose={handleSubMenuClose}
          TransitionComponent={Mui.Collapse}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {sublinks.map(sublink => (
            <Mui.MenuItem key={sublink.title}>
              <NavLink
                {...sublink}
                key={sublink.title}
                style={{ marginLeft: 0 }}
              />
            </Mui.MenuItem>
          ))}
        </Mui.Menu>
      </>
    )
  }

  function NavLink({ title, sublinks, className, ...props }) {
    return sublinks ? (
      <NavLinkWithSubs {...{ ...props, title, sublinks }} />
    ) : (
      <Link
        {...{
          ...props,
          color: "inherit",
          className: classNames(classes.navLink, className),
        }}
      >
        {title}
      </Link>
    )
  }

  const TopNav = () => (
    <nav className={classNames(classes.mainMenuNav, classes.mainMenuTopNav)}>
      {topBarLinks.map((item, i) => (
        <NavLink
          className={classes.topNavLink}
          {...item}
          key={`topBarLink-${item.title}`}
        />
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
      <Mui.CssBaseline />
      <HideOnScroll {...props}>
        <Mui.AppBar color="inherit">
          <Mui.Hidden mdDown>
            <Mui.Toolbar className={classes.topToolbar} variant="dense">
              <TopNav />
            </Mui.Toolbar>
          </Mui.Hidden>
          <Mui.Toolbar className={classes.mainToolbar}>
            <Link to="/" style={{ display: "flex", marginBottom: 0 }}>
              <img
                src={images.bg.navLogo}
                alt="Arbutus Capital logo"
                className={classes.navLogo}
              />
            </Link>
            <Mui.Hidden lgUp>
              <Mui.IconButton
                aria-label="open menu"
                edge="start"
                onClick={handleDrawerToggle}
                color="inherit"
              >
                <MenuIcon />
              </Mui.IconButton>
            </Mui.Hidden>
            <Mui.Hidden mdDown>
              <MainNav />
            </Mui.Hidden>
            <Mui.Hidden lgUp>
              <Mui.SwipeableDrawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                disableBackdropTransition
                onOpen={handleDrawerToggle}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerContainer,
                }}
              >
                <MainNav />
                <TopNav />
              </Mui.SwipeableDrawer>
            </Mui.Hidden>
          </Mui.Toolbar>
        </Mui.AppBar>
      </HideOnScroll>
      <Mui.Hidden mdDown>
        <Mui.Toolbar variant="dense" className={classes.topToolbar} />
      </Mui.Hidden>
      <Mui.Toolbar className={classes.mainToolbar} />
    </div>
  )
}

export default Header
