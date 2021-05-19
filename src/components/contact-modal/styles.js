import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  contactFormHeader: {
    marginBottom: theme.space.md,
  },
  contactFormFooter: {
    marginTop: theme.space.md,
  },
  closeButtonContainer: {
    position: "sticky",
    top: 0,
    right: 0,
  },
  closeButton: {
    position: "absolute",
    top: theme.space.md,
    right: theme.space.md,
    "& path": {
      stroke: theme.palette.white,
    },
  },
}))

export default styles
