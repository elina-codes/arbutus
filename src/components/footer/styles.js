import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.black,
    color: theme.palette.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: "1px solid #939498",
    paddingTop: theme.space.sm,
    paddingBottom: theme.space.sm,
    ...theme.sectionPaddingX,
  },
  footerLogo: {
    margin: 0,
  },
}))

export default styles
