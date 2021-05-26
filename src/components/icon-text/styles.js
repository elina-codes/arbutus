import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  iconTitle: {
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      paddingLeft: theme.space.sm,
      paddingRight: theme.space.sm,
      flex: 1,
    },
    [theme.breakpoints.down("sm")]: {
      width: 260,
      display: "flex",
      alignItems: "center",
      marginBottom: theme.space.md,
      textAlign: "left",
    },
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: "100%",
    padding: "5%",
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
  },
  dark: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
  },
  outlined: {
    border: `3px solid ${theme.palette.primary.main}`,
  },
}))

export default styles
