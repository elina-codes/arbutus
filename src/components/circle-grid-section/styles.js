import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  circleGrid: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "left",
    },
  },
  circleGridIcon: {
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.space.sm,
    },
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.space.sm,
    },
  },
}))

export default styles
