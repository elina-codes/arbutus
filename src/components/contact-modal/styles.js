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
    top: theme.space.xs,
    right: theme.space.xs,
  },
  successCloseBtn: {
    marginTop: theme.space.xl,
    marginBottom: theme.space.sm,
  },
}))

export default styles
