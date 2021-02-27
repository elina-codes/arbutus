import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(3),
    ...theme.sectionPadding,
  },
}))

export default styles
