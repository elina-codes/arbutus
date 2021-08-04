import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.white,
  },
  topToolbar: {
    color: theme.palette.white,
    background: theme.palette.primary.main,
    fontSize: 14,
    "& nav": {
      flex: 1,
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "calc(5% + 24px)",
      paddingRight: "calc(5% + 24px)",
    },
  },
  mainToolbar: {
    color: theme.palette.primary.main,
    justifyContent: "space-between",
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "calc(5% + 24px)",
      paddingRight: "calc(5% + 24px)",
    },
  },
  mainMenuNav: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      padding: theme.space.md,
    },
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  mainMenuTopNav: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white,
      flex: 1,
    },
  },
  navLogo: {
    marginBottom: 0,
    maxWidth: 170,
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    fontSize: 16,
    fontWeight: 500,
    "&:not(:last-child)": {
      marginBottom: 0,
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.space.xs,
      paddingBottom: theme.space.xs,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.space.md,
    },
  },
  topNavLink: {
    fontSize: "inherit",
  },
  mainNavCta: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.space.sm,
    },
    [theme.breakpoints.down("sm")]: {
      order: -1,
      marginBottom: theme.space.sm,
    },
  },
  subMenu: {
    width: "100%",
  },
  //mobileMenu
  drawerContainer: {
    width: 240,
  },
}))

export default styles
