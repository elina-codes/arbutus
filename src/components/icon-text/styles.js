import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  iconTitle: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingLeft: theme.space.sm,
      paddingRight: theme.space.sm,
    },
    [theme.breakpoints.down("sm")]: {
      width: 260,
      display: "flex",
      alignItems: "center",
      marginBottom: theme.space.md,
      textAlign: "left",
      "&.center": {
        width: "auto",
        textAlign: "center",
      },
    },
    "&:not(:last-child)": {
      marginBottom: theme.space.sm,
    },
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: 120,
      height: 120,
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: theme.space.sm,
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.space.sm,
    },
    "&.md": {
      width: 40,
      height: 40,
      [theme.breakpoints.up("md")]: {
        width: 60,
        height: 60,
      },
    },
  },
  dark: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
    padding: "5%",
  },
  outlined: {
    border: `3px solid ${theme.palette.primary.main}`,
    padding: "5%",
  },
}))

export default styles
