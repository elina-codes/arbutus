import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.white,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topToolbar: {
    color: theme.palette.white,
    background: theme.palette.primary.main,
    fontSize: "small",
    "& nav": {
      flex: 1,
    },
  },
  mainToolbar: {
    color: theme.palette.primary.main,
  },
  navLogo: {
    marginBottom: 0,
  },
}))

export default styles
