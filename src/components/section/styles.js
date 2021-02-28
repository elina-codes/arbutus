import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  section: {
    textAlign: "center",
    padding: theme.spacing(3),
    ...theme.sectionPadding,
  },
  hero: {
    minHeight: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
}))

export default styles
