import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.black,
    color: theme.palette.white,
    borderTop: "1px solid #939498",
    paddingTop: theme.space.sm,
    paddingBottom: theme.space.sm,
    textAlign: "center",
    ...theme.sectionPaddingX,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  footerLogo: {
    margin: 0,
  },
  footerSpacer: {
    [theme.breakpoints.up("md")]: {
      width: 100,
    },
  },
}))

export default styles
