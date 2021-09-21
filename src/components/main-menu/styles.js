import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.white,
  },
  topToolbar: {
    color: theme.palette.white,
    background: theme.palette.primary.main,
    minHeight: 40,
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
    [theme.breakpoints.up("md")]: {
      alignItems: "stretch",
      minHeight: 80,
    },
    [theme.breakpoints.down("lg")]: {
      paddingLeft: "calc(5% + 24px)",
      paddingRight: "calc(5% + 24px)",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 15,
      paddingRight: 5,
    },
  },
  mainMenuNav: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding: theme.space.md,
      color: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "flex-end",
    },
  },
  mainMenuTopNav: {
    [theme.breakpoints.down("md")]: {
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
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.space.xs,
      paddingBottom: theme.space.xs,
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.space.md,
    },
  },
  topNavLink: {
    fontSize: "inherit",
  },
  mainNavCta: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.space.sm,
      marginRight: 0,
      alignSelf: "center",
    },
    [theme.breakpoints.down("md")]: {
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
