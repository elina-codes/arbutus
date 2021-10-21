import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
  contactFormHeader: {
    marginBottom: theme.space.md,
  },
  contactFormFooter: {
    marginTop: theme.space.md,
  },
  closeButton: {
    position: "absolute",
    top: theme.space.xs,
    right: theme.space.xs,
    zIndex: 1,
  },
  successCloseBtn: {
    marginTop: theme.space.xl,
    marginBottom: theme.space.sm,
  },
}))

export default styles
