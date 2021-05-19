import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  footerMenu: {
    backgroundColor: theme.palette.black,
    paddingTop: 0,
  },
  footerMenuSection: {
    textAlign: "left",
  },
  footerMenuListItem: {
    marginBottom: 0,
  },
}))

export default styles
