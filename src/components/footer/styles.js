import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.black,
    color: theme.palette.white,
    ...theme.sectionPaddingX,
  },
}))

export default styles
