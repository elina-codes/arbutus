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
      paddingLeft: theme.space.sm,
      paddingRight: theme.space.sm,
      textAlign: "left",
      "&.center": {
        width: "auto",
        textAlign: "center",
      },
    },
    "&:not(:last-child)": {
      marginBottom: theme.space.sm,
    },
    "& > svg": {
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.space.sm,
      },
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.space.sm,
      },
      "&.md": {
        width: 60,
        height: 60,
        [theme.breakpoints.up("md")]: {
          width: 80,
          height: 80,
        },
      },
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
      width: 90,
      height: 90,
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
      [theme.breakpoints.down("sm")]: {
        marginRight: theme.space.sm,
      },
      [theme.breakpoints.up("md")]: {
        width: 60,
        height: 60,
      },
    },
  },
  iconTextImage: {
    marginBottom: 0,
  },
  dark: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.white,
    padding: "5%",
  },
  outlined: {
    border: `3px solid ${theme.palette.primary.main}`,
    padding: "5%",
    [theme.breakpoints.up("md")]: {
      padding: "20%",
    },
  },
}))

export default styles
