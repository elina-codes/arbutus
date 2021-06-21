import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  blockquote: {
    position: "relative",
    fontStyle: "italic",
    maxWidth: 700,
    paddingLeft: 70,
    paddingRight: 70,
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "justify",
    "&:not(:first-child)": {
      marginTop: 100,
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 30,
      paddingRight: 30,
    },
  },
  quoteAuthor: {
    display: "block",
    marginTop: theme.space.xs,
  },
  quoteMark: {
    opacity: 0.1,
    position: "absolute",
    "&.left": {
      content: `'“'`,
      left: 0,
      top: -50,
    },
    "&.right": {
      content: `'„'`,
      right: 0,
      bottom: -25,
    },
  },
}))

export default styles
