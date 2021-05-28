import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  footerMenu: {
    backgroundColor: theme.palette.black,
    paddingTop: 0,
  },
  footerMenuSection: {
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      "&:not(:last-child)": {
        marginBottom: theme.space.md,
      },
    },
    [theme.breakpoints.only("sm")]: {
      flex: "1 0 25%",
      marginRight: theme.space.xl,
      "&:nth-child(3)": {
        marginRight: 0,
      },
      "&:nth-child(-n+2)": {
        marginBottom: theme.space.xl,
      },
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "25%",
      "&:not(:first-child)": {
        marginLeft: theme.space.xl,
      },
    },
  },
  footerMenuListItem: {
    marginBottom: 0,
    "& .MuiLink-root": {
      opacity: 0.7,
      "&:hover, &:focus": {
        opacity: 1,
        textDecoration: "none",
      },
    },
  },
  footerNav: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
}))

export default styles
