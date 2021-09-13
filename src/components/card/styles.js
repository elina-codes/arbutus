import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  card: {
    color: theme.palette.text.main,
    display: "inline-block",
    maxWidth: 360,
    width: "100%",
    "& .MuiCardActionArea-root": {
      height: "100%",
    },
  },
  dark: {
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
  },
  iconText: {
    paddingTop: theme.space.md,
  },
}))

export default styles
