import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
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
