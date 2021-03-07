import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(3),
    ...theme.sectionPadding,
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    minHeight: 500,
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
  },
  sectionHeading: {
    textAlign: "center",
    maxWidth: 540,
    alignSelf: "center",
  },
  leftAlign: {
    textAlign: "left",
    alignSelf: "flex-start",
  },
  dark: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
  },
}))

export default styles
