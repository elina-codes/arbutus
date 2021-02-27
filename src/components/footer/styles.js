import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  footer: {
    backgroundColor: "black",
    color: "white",
    ...theme.sectionPaddingX,
  },
}))

export default styles
