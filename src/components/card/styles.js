import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  dark: {
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
  },
  readMoreIcon: {
    verticalAlign: -1,
  },
}))

export default styles
